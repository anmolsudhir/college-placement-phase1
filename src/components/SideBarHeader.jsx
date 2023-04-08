import React, {useState} from 'react'
import EXPAND from '../assests/images/expand_more_FILL0_wght100_GRAD-25_opsz48.svg'

function SideBarHeader({label, content, handleScroll, idx}) {

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

    const setScrollPosition = () => {
        handleScroll(idx*930)
    }

    const cont = content.map((elem) => <div key={elem.label} onClick={setScrollPosition} className='side-bar-elem'>{elem.label}</div>)

  return (
    <div className='side-bar-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='side-bar-content'>
            <span className={`label ${transit}` }>{label}</span>
            {!hover && <img src={EXPAND} alt='expand img'></img>}
        </div>
        <div className='content'>
            {hover && cont}
        </div>
    </div>
  )
}

export default SideBarHeader