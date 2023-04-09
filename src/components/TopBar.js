import React from 'react'
import LOGO from '../assests/images/logo-cmr-cropped-removebg-preview.png'
import LIGHT from '../assests/images/brightness.png'
import DARK from '../assests/images/sleep-mode.png'

function TopBar({theme, toggleTheme}) {
  return (
    <div className='topbar'> 
        <div className='logo'>
          <img src={LOGO} style={{height:"3.5rem", width:"3.5rem", alignItems:"center", justifyContent:"center"}}/>
          <span style={{marginLeft:"1%", fontSize:"2.5rem", fontWeight:"700", color:"#99BF14"}}>CMRIT PLACEMENT PORTAL</span>
        </div>
        <div className={`theme-btn ${theme}-back`} onClick={toggleTheme}>
          <img style={{width:"1.25rem", }} src={theme === 'light' ? DARK : LIGHT}/>
        </div>
    </div>
  )
}

export default TopBar