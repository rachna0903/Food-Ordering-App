import React from "react";
//import {Component} from "react"; // we can do this also

// class UserClass extends Component{  } 


class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            count:0,
            userInfo:{
              name: "Chhoti",
              location:"Kolkata",
              avatar_url : "https://dummy-photo.com",
            }
          }
  
        //   console.log("Child constructor")
          
    };

    async componentDidMount(){
        //componentDidMount is use to make an API Calls
        // console.log(this.props.Name+"Child componentDidMount")
        const data = await fetch("https://api.github.com/users/rachna0903");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    };

    componentWillUnmount(){
        console.log("componentWillUnmount")
        //clear interval here
    }

    render(){
        // destructuring here
        // const{name,location,contact}=this.props;
        

        // we can destructure state like this 
        const{count} = this.state;
        const{name,location,avatar_url} = this.state.userInfo;

        // console.log("Child Render")

        return(
            <div>
                <img src={avatar_url} className="pl-[500px] pr-[500px] py-10"/>
                 <h2>Name : {name}</h2>
                 <h2>Location : {location}</h2>


                <button onClick={()=>{
                    this.setState({count:this.state.count-1})
                }} className="bg-orange-500 text-white p-3 m-3 rounded-lg">Previous</button>
                <span className="size-10 px-2 py-5 m-5">{this.state.count}</span>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }} className="bg-orange-500 text-white p-3 m-3 rounded-lg">Next</button>
                {/* destructure use like 
                    <h1>Count : {count}</h1> 
                    <h1>Count2 : {count2}</h1>
                */}
                    
               
                {/* <h1>Count : {this.state.count2}</h1>   >>> 2nd state  */}
                {/* by desturing  */}
                {/* <h3>Name: {name}</h3>
                <h4>Education: {location}</h4>
                <h4>Location: {contact}</h4> */}
                
                {/* without destructurinh normal we use like this */}
                {/* <h4>Education:{this.props.Education}</h4>
                <h4>Location: {this.props.Location}</h4> */}
            </div>
        )
    }
}

export default UserClass;

/******
 * -------Mounting------
 * 
 * constructor (dummy)
 * Render (dummy)
 *     <HTML dumy>
 *     <this. setState> -> State variable is updated
 * 
 * --------Update-----
 * 
 *    render(API data)
 *    <HTML>(new API data)
 *    componentDidUpdate
 * 
 */