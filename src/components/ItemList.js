import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL_IMAGE } from "../utils/constants";


const ItemList = ({ items }) => {
  //console.log("hi", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
   //dispatch an action
   dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-orange-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>- Rs{item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 my-0 mx-28 rounded-lg bg-black text-opacity-85 text-white shadow-lg" onClick = {() => handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img src={CDN_URL_IMAGE + item.card.info.imageId} className="w-full" alt="item_img" />

          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;