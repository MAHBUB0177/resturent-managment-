import React from 'react'
import defaultImg from "../images/room-1.jpeg"
import Card from 'react-bootstrap/Card';

export const RoomsItem = ({room}) => {
  const{name,slug,images,price}=room;
  return (
    <>
  <div className="row" style={{ display: 'inline-block',marginLeft:'5px',marginTop:'10px',marginBottom:'30px' }} >
    <Card style={{ width: '18rem',marginLeft:'15px'}}>
      <Card.Img variant="top" src={images[0] || defaultImg} alt='image'  />
      <Card.Body> 
        <h6 style={{paddingLeft:'55px',fontSize:'20px'}}>{price} per night</h6>
        <p style={{background:'black',color:'white',borderRadius:'5px',padding:'10px',textAlign:'center'}}>{name}</p>       
      </Card.Body>
    </Card>
   </div>

    </>
    


    


      
   
  )
}
