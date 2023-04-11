import React from 'react'
import SideBarHeader from './SideBarHeader'

function SideBar({theme, info, handleScroll}) {
    const content = info.map((element, idx) => <SideBarHeader theme={theme} idx={idx} handleScroll={handleScroll} key={element[0].header} label={element[0].header} content = {element[0].content}></SideBarHeader>)
  return (
    <div className='side-bar'>
        <pre style={{marginBottom:"1rem", marginLeft:"1rem", color:"#B0B0B0"}}>Overview   {">"}</pre>
        {content}
    </div>
  )
}

export default SideBar