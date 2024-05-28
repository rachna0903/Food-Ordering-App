// import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        
        // console.log("Parent constructor")
     /*   
        # how life cycle method works <<<<<< 

        -Parent constructor then
        -Parent render then 
            -first Child constructor then
            -first Child render then

            -second child constructor then
            -second child render then

            <DOM Updated - In Single  batch >

            -first Child componentDidMount
            -second child componentDidMount

        -Parent componentDidMount
     */

    }

    componentDidMount(){
        //componentDidMount is use to make an API Calls
        // console.log("parent componentDidMount")
    }
    render(){
        // const{Name,Education} = this.props;

        // console.log("Parent Render");

        return(
            <div className="text-center items-center justify-center font-bold m-5 p-3">
            <h1>About</h1>
            <p>Learning React from Namaste React Web Series </p>
            <UserClass/>
            {/* <UserClass name={"Rachna Bharti "}  location={"Bihar Sharif, Bihar"} contact={"rachnabharti0903@gmail.com"}/> */}

            {/* <User Name={"Rachna Bharti."}/>
            <UserClass Name={"Bhart"} Education={" B.Tech in Electronics and Communication Engineering ."} Location={"Kolkata"}/> */}
        </div>
        )
    }
}

// const About = () => {
//     return(
//         <div className="about">
//             <h1>About</h1>
//             <p>Learning React from Namaste React Web Series </p>
//             <User Name={"Rachna Bharti."}/>
//             <UserClass Education={" B.Tech in Electronics and Communication Engineering ."} Location={"Kolkata"}/>
//         </div>
//     )
// }

export default About;