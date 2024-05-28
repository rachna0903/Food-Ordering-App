// import {useState,useEffect} from "react";
// import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { CDN_URL_IMAGE } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

//RestaurantMenu component is uses here to desplay data
const RestaurantMenu = () => {

  const { resid } = useParams();

  // console.log(params)

  const resInfo = useRestaurantMenu(resid);

  const [showIndex, setshowindex] = useState(null);
  // const[resInfo,setResInfo] = useState(null);

  // useEffect(()=>{
  //  fetchMenu();
  // }, []);

  // const fetchMenu = async() =>{
  //     const data = await fetch(MENU_URL+resid);
  //     const json = await data.json();
  //     console.log(json);
  //     setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);



  return (
    <div className="text-center ">
      <h1 className="text-2xl font-bold my-5 p-3">{name}</h1>
      <p className="text-lg font-bold">{cuisines && cuisines.join(" , ")} - {costForTwoMessage}</p>
      {/* categories accordions  */}
      {/* we need catagorias accodian */}
      {
        categories.map((category, index) => (
          //controlled component
          <RestaurantCategory key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}

            setshowindex={() => setshowindex(index)}
          />
          //it is lifting state up
          //  now parent is controllinh child this is controlled  componen
          // we cannot give data from child to parent
          // so we have to do indriectly we amek a fucntion and pass that as props
          // to childern and then call from children as a setshowindex function
        ))
      }
      {/* <h2>Menu</h2>
          {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" Rs "}{item?.card?.info?.price/100}</li>)} */}
      {/* <li>{itemCards[0].card.info.name}</li>
          <li>{itemCards[1].card?.info.name}</li>
          <li>{itemCards[2].card?.info.name}</li> */}
      
    </div>
  );
};

export default RestaurantMenu;