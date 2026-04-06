import Profile from "./profile";
import ProfileClass from "./ProfileClass";
import {Component} from "react";

// const About =()=>{
//     return(
//         <div>
//             <h1>About page</h1>
//             <Profile name="radharani" address="Barsana"/>
//             <ProfileClass name="kanha" address="mathura"/>
//         </div>
//     )
// };
// export default About;

class About extends Component { 
 constructor(){
    super();
    console.log('parent ctr is called');
 }

//  componentDidMount(){
//     console.log('parent mount is called');
//  }
 render(){
    console.log('parent render is called');
    return(
        <div>
           <ProfileClass name="kanha" address="mathura"/>
       
        </div>
        
    )
}
}
export default About;