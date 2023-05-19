import React from 'react'
import TopBar from './topbar/TopBar'
import SideBar from './sidebar/SideBar'

export default function Layout({children, notSidebar, info}) {
  return (
    <>
      <TopBar></TopBar>
      <div style={{display : "flex", flexDirection:"row", height:"100%", width:"100%"}}>
        {!notSidebar && <SideBar info={info} handleScroll={() => false}></SideBar>}
        {children}
      </div>
    </>
  );
}
