import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import reslist from "../utils/mockData";
import { useState, useEffect } from "react"; //utility function 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAppStatus from "../utils/useAppStatus"; //custom hooks


const Body = () => {
    const [resItems, setResItems] = useState([]);
    const [filteredSearchRes, setFilteredSearchRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log(resItems)

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setResItems(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) // here used optional chaining 
        setFilteredSearchRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    // if(resItems.length === 0){
    //     return <h1 className="loading">Loading..........</h1>; //loader 
    //     return <Shimmer/>; //conditional rendering 
    // }

    const filterRestaurant = () => {
        const filteredRestaurant = resItems.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredSearchRes(filteredRestaurant);
    }//type at input and filter the restaurant cards and update the UI


    const filteredBtn = () => {
        const filteredItems = resItems.filter((res) => res.info.avgRating > 4.5);
        setFilteredSearchRes(filteredItems);
    };

    const appStatus = useAppStatus(); //custom hook logic
    if (appStatus === false) return <h3>Looks like you are offline!! Please check your internet connection🌐</h3>

    // this is also conditional rendering 
    return resItems.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 ">
                    <input className="border border-solid border-gray-900  p-2 w-[300px]" type="text" value={searchText} onChange={(event) => {
                        setSearchText(event.target.value)
                    }} placeholder="Search for your favourite Restaurants......"></input>
                    <button className="bg-orange-500 text-white font-bold hover:bg-orange-300  px-4 py-2 m-4 rounded-lg" onClick={filterRestaurant}>Search</button>
                </div>
                <div className="Filter_search m-4 p-4 flex items-center">
                    <button className="bg-orange-500 text-white font-bold hover:bg-orange-300 px-4 py-2 rounded-lg" onClick={filteredBtn}>Top Rated Restaurants</button>
                </div>

            </div>
            <div className="flex flex-wrap items-center ">

                {filteredSearchRes.map((restaurant) => {
                    return (
                        // if the restaurant is promoted than add a label to it 

                        <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                            {restaurant?.info?.cuisines.includes('Desserts') ? 
                            (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />
                            )}

                        </Link>
                    )
                })}

                {/* not using keys(not acceptable) <<< index as a key <<<<<<<<<< unique id (best pratices)  */}



                {/* using hard coded data (mockData ) */}

                {/* <RestaurantCard resData={reslist[0]} />
                <RestaurantCard resData={reslist[1]} />
                <RestaurantCard resData={reslist[2]} />
                <RestaurantCard resData={reslist[3]} />
                <RestaurantCard resData={reslist[4]} />
                <RestaurantCard resData={reslist[5]} />
                <RestaurantCard resData={reslist[6]} />
                <RestaurantCard resData={reslist[6]} />
                <RestaurantCard resData={reslist[6]} />
                <RestaurantCard resData={reslist[6]} /> */}
            </div>

        </div>
    )
}

export default Body;