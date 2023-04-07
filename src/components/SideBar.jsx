import React from 'react'
import SideBarHeader from './SideBarHeader'

function SideBar() {

  return (
    <div className='side-bar'>
        <pre style={{marginBottom:"1rem", marginLeft:"1rem", color:"#B0B0B0"}}>{"Overview   >"}</pre>
        <SideBarHeader label={"Personal Info"}></SideBarHeader>
        <SideBarHeader label={"Academic Info"}></SideBarHeader>
        <SideBarHeader label={"Career Choice"}></SideBarHeader>
        <SideBarHeader label={"Backlog History"}></SideBarHeader>
    </div>
  )
}

export default SideBar