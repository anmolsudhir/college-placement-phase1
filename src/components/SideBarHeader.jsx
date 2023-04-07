import React, {useState} from 'react'
import EXPAND from '../assests/images/expand_more_FILL0_wght100_GRAD-25_opsz48.svg'

function SideBarHeader({label}) {

    const [hover, setHover] = useState(false)
    const [transit, setTransit] = useState(null)
    const handleMouseEnter = () => {
        setTransit("label-2")
        setHover(true)
    }
    const handleMouseLeave = () => {
        setTransit("label-1")
        setHover(false)
    }

  return (
    <div className='side-bar-content' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className={`label ${transit}`}>{label}</span>
        {!hover && <img src={EXPAND}></img>}
    </div>
  )
}

export default SideBarHeader