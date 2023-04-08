import React from 'react'
import { Image } from 'react-bootstrap';
import LOGO from '../assests/images/logo-cmr-cropped-removebg-preview.png'

function TopBar(props) {
  return (
    <div className='topbar'> 
        <div className='logo'>
          <Image src={LOGO} style={{height:"10%", width:"10%"}}></Image>
          <span style={{marginLeft:"1%", fontSize:"48px", fontWeight:"700", color:"#99BF14"}}>CMRIT PLACEMENT PORTAL</span>
        </div>
    </div>
  )
}

export default TopBar