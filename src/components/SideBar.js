import React from 'react'
import { useState } from 'react'

function SideBar(props) {
  const [collapsed, setCollapsed] = useState(true)
  
  const handleMouseEvent = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='sidebar-content' onMouseLeave={handleMouseEvent} onMouseEnter={handleMouseEvent}> 
      {
        collapsed ?  'Progress Bar' : 'List'
      }
    </div>
  )
}

export default SideBar