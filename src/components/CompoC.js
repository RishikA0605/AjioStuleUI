import React,{useContext} from 'react'
import UserContext from '../utils/UserContext'  
const CompoC = () => {
  const user = useContext(UserContext);
  console.log(user);
  

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default CompoC;
