import React from 'react'
import { Image } from 'react-bootstrap';
import LOGO from '../assests/images/logo-cmr-cropped-removebg-preview.png'

function TopBar(props) {
  return (
    <div className='topbar'> 
        <div className='logo'>
          <img src={LOGO} style={{height:"3.5rem", width:"3.5rem", alignItems:"center", justifyContent:"center"}}/>
          <span style={{marginLeft:"1%", fontSize:"2.5rem", fontWeight:"700", color:"#99BF14"}}>CMRIT PLACEMENT PORTAL</span>
        </div>
    </div>
  )
}

export default TopBar