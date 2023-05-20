import { useState} from 'react'
import {Content, ContentContainer, PageContElem, PageContHeader} from './styles'

export default function PageContentComp({theme, handleScroll, idx, label, content}){
    const [hover, setHover] = useState(false)

    const setScrollPosition = (index) => {
        handleScroll(idx, index)
    }

    const cont = content.map((elem, index) => !elem.hidden && <Content $theme={theme} key={elem.label} onClick={() => {setScrollPosition(index)}}>{elem.label}</Content>)

    return (
        <>
        <PageContElem $theme={theme}>
            <PageContHeader onClick={() => (setHover(!hover))} className='header' $theme={theme}>
                {label}
            </PageContHeader>
            {hover && <ContentContainer $theme={theme}>
                {cont}
            </ContentContainer>}
        </PageContElem>
        </>
    )
}