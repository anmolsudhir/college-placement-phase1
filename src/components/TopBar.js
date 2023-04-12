import React from 'react'
import LOGO from '../assests/images/logo-cmr-cropped-removebg-preview.png'
import LIGHT from '../assests/images/brightness.png'
import DARK from '../assests/images/sleep-mode.png'
import MENU from '../assests/images/menu-bar.png'

function TopBar({theme, toggleTheme}) {
  return (
    <div className='topbar'> 
        <div className='logo'>
          <img className='logo-img' alt='logo' src={LOGO} style={{height:"3.5rem", width:"3.5rem", alignItems:"center", justifyContent:"center"}}/>
          <span className='logo-text' >CMRIT PLACEMENT PORTAL</span>
        </div>
        <div className={`theme-btn ${theme}-back`} onClick={toggleTheme}>
          <img className={`theme-img`} alt='button theme' src={theme === 'light' ? DARK : LIGHT}/>
        </div>
        <div className={`side-bar-btn ${theme}-back-menu`}>
          <img className={`theme-img`} alt='button theme' src={MENU}/>
        </div>
    </div>
  )
}

export default TopBar