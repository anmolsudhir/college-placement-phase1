import { useState} from 'react'
import Image from 'next/image'
import {Content, ContentContainer, SideBarElem, SideBarHeader} from './styles'

export default function SideBarElemComp({theme, handleScroll, idx, label, content}){
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true)
        
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

    const setScrollPosition = (index) => {
        handleScroll(idx, index)
    }

    const cont = content.map((elem, index) => !elem.hidden && <Content $theme={theme} key={elem.label} onClick={() => {setScrollPosition(index)}}>{elem.label}</Content>)

    return (
        <>
        <SideBarElem onClick={() => (setHover(!hover))}  $theme={theme}>
            <SideBarHeader className={hover && 'header'} $theme={theme}>
                {label}
                {<Image style={{pointerEvents:'none'}} src={theme === 'light' ? '/expand_more_FILL0_wght100_GRAD-25_opsz48.svg' : '/down-arrow.png'} alt='arrow' width={20} height={20} ></Image>}
            </SideBarHeader>
            {hover && <ContentContainer $theme={theme}>
                {cont}
            </ContentContainer>}
        </SideBarElem>
        </>
    )
}