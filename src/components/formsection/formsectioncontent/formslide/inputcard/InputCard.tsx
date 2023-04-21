import { useState } from "react"
import { InfoDiv, InfoText, Input, InputCardElem, InputLabel } from "./styles"
import Image from "next/image"
import Text from "@/components/inputs/text/Text"
import TeleInput from "@/components/inputs/tel/TeleInp"
import Radio from "@/components/inputs/radio/Radio"


function InputCard({theme, element}) {
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)
  const [valid, setValid] = useState(true)

  return (
    <InputCardElem onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} $theme={theme}>
      {hover && <InfoDiv $theme={theme} onClick={() => setActive(!active)} onMouseLeave={() => setActive(false)} $active={active}>
        {active && <InfoText $theme={theme}>{element.info}</InfoText>}
        <Image style={{cursor : "pointer"}} src={theme === 'light' ? '/information-button-dark.png' :'/information-button.png'} alt="info" width={15} height={15}/>
      </InfoDiv>}
      {/* <Text theme={theme} element={element}/> */}
      {/* <TeleInput theme={theme} element={element} ></TeleInput> */}
      <Radio theme={theme} element={element}></Radio>
    </InputCardElem>
  )
}

export default InputCard