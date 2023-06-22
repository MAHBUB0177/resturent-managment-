import React from 'react'
import image1 from '../images/room-1.jpeg'
import { Home } from '../Home';
import RoomContainer from './RoomContainer';
const Rooms = () => {
  
  return (
    <>
    <Home/>
      <div style={{position:'relative',width:'100%'}}>
      <img src={image1} alt='room' style={{height:'400px',width:'100%'}}/>
      <div style={{position:'absolute',height:'200px',width:'500px',background:'white',borderRadius:'5px',marginTop:'-300px',marginLeft:'300px'}}>
        <p style={{padding:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue, leo in varius lobortis, sapien massa dapibus quam, nec varius est nibh vel turpis. Duis convallis lobortis molestie. </p>
      </div>
    </div>
   
    <RoomContainer/>
    
    </>

  )
}

export default Rooms