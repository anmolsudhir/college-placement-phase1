import React, {useState, useEffect, useRef} from 'react'
import { Image } from 'react-bootstrap';
import ImageRadio from './radioImage';
import ProgressBar from './ProgressBar.jsx';
import LOGO from '../assests/images/logo-cmr-cropped-removebg-preview.png'
const ap=22;
const gp=88;

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