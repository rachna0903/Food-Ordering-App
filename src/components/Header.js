import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useAppStatus from "../utils/useAppStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [logBtn, setLogBtn] = useState("Login");

  const appStatus = useAppStatus();

  const {loggedInUser}= useContext(userContext);

  //subscribing to the store using a selector
  const cartItems = useSelector((store)=> store.cart.items);


  const loggingButton = () => {
    logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
  };

  return (
    <div className="flex justify-between bg-orange-400 shadow-lg pr-2 ">
      <div className="logo-container">
        <img className="w-30 h-[145px]" src={LOGO_URL} alt="logo" />
      </div>
      {/* //we should not use anchor tag here like this : <li><a href="/about">About Us</a> </li> because it will re-load the whole page (this is known as server side routing)
            instead use Link Component which given by react-router-dom because it will not reloading our page again and again 
            it will just refresh the component this is known as single page application via client side routing.*/}
      <div className="flex items-center ">
        <ul className="flex p-5 m-3">
          <li className="px-5 text-xl text-white" >
            App Status:{appStatus?'Online ✅':'No Internet Connection ⛔'}
          </li>

          <li className="px-5 cursor-pointer text-xl text-white">
            <Link to="/">Home</Link>
          </li>

          <li className="px-5 cursor-pointer text-xl text-white">
            <Link to="/about">About Us </Link>
          </li>

          <li className="px-5 cursor-pointer text-xl text-white">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-5 cursor-pointer text-xl text-white">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-5 cursor-pointer text-l text-green-200 font-bold ">{cartItems.length} items<Link to="/cart"><img src="https://cdn-icons-png.flaticon.com/128/10446/10446795.png" alt="cart" className="h-[55px] cursor-pointer"/></Link></li>

          

          <button className="px-6  cursor-pointer text-xl font-bold bg-orange-600 text-white hover:bg-amber-900 rounded-lg" onClick={loggingButton} >{logBtn}</button>

          <li className="px-5 cursor-pointer text-xl text-white">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;