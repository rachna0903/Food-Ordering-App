import{useState,useEffect} from "react";

const useAppStatus= () =>{
    const[appStatus, setAppStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setAppStatus(false);
        })
        
        window.addEventListener("online",()=>{
            setAppStatus(true);
        })
    },[]);
    return appStatus;
}

export default useAppStatus;