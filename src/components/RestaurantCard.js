import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const{resData} = props;
    const{cloudinaryImageId,name, cuisines,avgRating,costForTwo,locality} =resData?.info;
    const{deliveryTime}=resData?.info?.sla // here used optional chaining
    return (
        <div className="m-4 p-4 w-[280px] bg-[#f0f0f0] rounded-lg hover:bg-gray-300">
        <img className="rounded-lg " alt="card-img" src={CDN_URL+ cloudinaryImageId} />
            <h3 className="font-bold py-5 text-lg">{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{locality}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}mins</h4>
            
        </div>
    )
};

// Higher order component 

// input - RestauranttCard ==>> RestaurantCardPromoted 

export const withPromotedLabel = (RestaurantCard) =>{
    return(props)=>{
        return (
            <div>
                <label className="absolute  p-1 bg-black text-white rounded-xl">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;