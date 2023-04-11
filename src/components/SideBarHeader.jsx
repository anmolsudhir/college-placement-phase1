import React, {useState} from 'react'
import EXPAND_LIGHT from '../assests/images/expand_more_FILL0_wght100_GRAD-25_opsz48.svg'
import EXPAND_DARK from '../assests/images/down-arrow.png'

function SideBarHeader({theme, label, content, handleScroll, idx}) {
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

    const setScrollPosition = (index) => {
        handleScroll(idx, index)
    }

    const cont = content.map((elem, index) => <div key={elem.label} onClick={() => {setScrollPosition(index)}} className='side-bar-elem'>{elem.label}</div>)

  return (
    <div className='side-bar-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='side-bar-content'>
            <span className={`label ${transit}` }>{label}</span>
            {!hover && <img src={theme === 'light' ? EXPAND_LIGHT : EXPAND_DARK} alt='expand img' style={{width:"1.5rem"}}></img>}
        </div>
        <div className='content'>
            {hover && cont}
        </div>
    </div>
  )
}

export default SideBarHeader