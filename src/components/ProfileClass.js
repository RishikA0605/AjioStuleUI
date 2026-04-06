import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super();
    this.state ={
      userDetails:null
        
    }
  }

    
      async componentDidMount(){
        const data = await fetch("https://api.github.com/users/RishikA0605");
        const resData = await data.json();
        console.log(resData);
        this.setState({
          userDetails:resData
        });
        console.log('component did mount');
        this.timer = setInterval(()=>{
          console.log(' rishika mernstack developer');
        },1000);
      }
      
     componentDidUpdate(){
        console.log('component did update is called');
     }  
     componentWillUnmount(){
        console.log('component will unmount is called');
        clearInterval(this.timer);
     }

 
  render() {
    if(this.state.userDetails===null){
      return <h1>Loading</h1>
    }
   const {name,avatar_url} = this.state.userDetails;
    return (
      <div style={{
        "border":"1px solid black"
      }}>
        <h1>Profile class based component</h1>
        <h2>Name : {name}</h2>
        <img src={avatar_url} alt="profile pic" width="200px"/>
       
      </div>
    );
  }
}
export default ProfileClass;
