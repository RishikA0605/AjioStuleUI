import { useState } from "react";

const Profile =(props)=>{
    const {name, address} = props
    const [count, setCount] = useState(0);
   
    

    return(
      <div style={{
        "border":"1px solid black"
      }}>
        <h1>Profile functional component</h1>
        <h2>Name : {name}</h2>
        <h2>AAdress: {address}</h2>
        <h1>count - {count}</h1>
        <h1>count - {count}</h1>

        <button onClick={()=>{
            setCount(count+1);
        }}>Increment</button>
        
      </div>
    )
};
export default Profile;