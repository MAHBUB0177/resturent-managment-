import React from 'react'
import loading1  from '../images/gif/loading-arrow.gif'

export const Loading = () => {
  return (
    <div style={{background:'pink',height:'300px',width:'300px',display:'flex',position:'relative',alignItems:'center',justifyContent:'center'}}>
<h4>Rooms Data Loading.....</h4>
    {/* <image  src={loading1} alt='logo' style={{height:'200px',width:'250px'}} /> */}
    </div>
  )
}
