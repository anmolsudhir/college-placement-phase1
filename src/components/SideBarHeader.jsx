import React, {useState} from 'react'
import EXPAND from '../assests/images/expand_more_FILL0_wght100_GRAD-25_opsz48.svg'

function SideBarHeader({label, content}) {

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

    const cont = content.map((elem) => <div className='side-bar-elem'>{elem.label}</div>)

  return (
    <div className='something'>
        <div className='side-bar-content' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className={`label ${transit}` }>{label}</span>
            {!hover && <img src={EXPAND}></img>}
        </div>
        <div className='content' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {hover && cont}
        </div>
    </div>
  )
}

export default SideBarHeader