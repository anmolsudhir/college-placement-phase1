import React from 'react'
import '../styles/styles.scss'
import ImageRadio from './radioImage';
import ProgressBar from './ProgressBar.jsx';
const ap=2;

function TopBar(props) {

  return (
    <div className='sidebar'> 
         <ImageRadio completed={ap} total={ap} />
         <ProgressBar/>    
    </div>
  )
}

export default TopBar