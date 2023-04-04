import React from 'react'
import ImageRadio from './radioImage';
import ProgressBar from './ProgressBar.jsx';
const ap=2;

function TopBar(props) {

  return (
    <div className='topbar'> 
         <ImageRadio completed={ap} total={ap} />
         <ProgressBar/>    
    </div>
  )
}

export default TopBar