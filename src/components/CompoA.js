import React, { useContext } from 'react'
import CompB from './CompoB'
import UserContext from '../utils/UserContext'

const CompoA = () => {
  
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <CompB />
    </div>
  );
};

export default CompoA

