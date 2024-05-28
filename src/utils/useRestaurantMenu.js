import {useState, useEffect } from "react";
import { MENU_URL } from "./constants";

// useResturantMenu is a custom hook to fetch data

const useRestaurantMenu = (resid) =>{

 const[resInfo,setResInfo]=useState(null);
    //fetchData
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(MENU_URL + resid);
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json)
  }

  return resInfo;
};

export default useRestaurantMenu ;