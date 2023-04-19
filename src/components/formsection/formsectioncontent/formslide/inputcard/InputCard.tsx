import { useState } from "react"
import { InfoDiv, InfoText, Input, InputCardElem, InputLabel } from "./styles"
import Image from "next/image"


function InputCard({theme, element}) {
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)
  const [valid, setValid] = useState(true)

  return (
    <InputCardElem onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} $theme={theme}>
      < InputLabel $theme={theme} className="label">{element.label}</InputLabel>
      {hover && <InfoDiv $theme={theme} onClick={() => setActive(!active)} onMouseLeave={() => setActive(false)} $active={active}>
        {active && <InfoText>{element.info}</InfoText>}
        <Image style={{cursor : "pointer"}} src={theme === 'light' ? '/information-button-dark.png' :'/information-button.png'} alt="info" width={15} height={15}/>
      </InfoDiv>}
      <Input onChange={(e) => {if(e.target.value.match(element.regex)) setValid(true); else setValid(false)}} $theme={theme} $type={element.type} $placeholder={element.label}/>
    </InputCardElem>
  )
}

export default InputCard