import {useState} from "react";

const User = (props) => {

    const[count,setCount] = useState(1);
    // const[count2] = useState(1);  if we want to use 2nd useState use like this

    const prevCounter= () =>{
        setCount(count<=0?count:count-1)
    }

    const nextCounter = () =>{
        setCount(count+1);
    }  

    console.log("functional component")
    return(
        <div className="user-card">
          <button onClick={prevCounter}> Prev</button>
          <span className="counter-span">Function Count : {count}</span>
          <button onClick={nextCounter}>Next</button>
          {/* <h1>Count : {count2}</h1> */}
          <h2>Name: {props.Name}</h2>
          <h4>Location: Bihar Sharif, Bihar</h4>
          <h4>Contact: rachnabharti0903@gmail.com</h4>
        </div>
    )
}

export default User;