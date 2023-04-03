import React from 'react'
import ImageRadio from './radioImage';
import ProgressBar from './ProgressBar.jsx';
const ap=22;
const gp=88;

function TopBar(props) {

  return (
    <div className='topbar'> 
         <ImageRadio completed={ap} total={gp} />
         <ProgressBar completed={ap} total={gp}/>    
    </div>
  )
}

export default TopBar