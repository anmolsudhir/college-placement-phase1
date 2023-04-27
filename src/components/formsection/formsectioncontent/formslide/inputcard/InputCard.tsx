import { useState } from "react"
import { InfoDiv, InfoText, Input, InputCardElem, InputLabel } from "./styles"
import Image from "next/image"
import Text from "@/components/inputs/text/Text"
import TeleInput from "@/components/inputs/tel/TeleInp"
import Radio from "@/components/inputs/radio/Radio"
import Date from "@/components/inputs/date/Date"
import MailInput from "@/components/inputs/mail/Mail"
import NumberInp from "@/components/inputs/number/Number"
import Select from "@/components/inputs/select/Select"
import Address from "@/components/inputs/address/Address"


function InputCard({theme, element, idx, validateInput}) {
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)

  const handleIV = (validity) => {
    validateInput(idx, validity)
  }

  const arr = [
    {
      type : 'text',
      comp : <Text handleIV={handleIV} theme={theme} element={element}/>
    },
    {
      type : 'tel',
      comp : <TeleInput handleIV={handleIV} theme={theme} element={element} ></TeleInput>
    },
    {
      type : 'radio',
      comp : <Radio theme={theme} element={element}></Radio>
    },
    {
      type : 'date',
      comp : <Date handleIV={handleIV} element={element} theme={theme} />
    },
    {
      type : 'mail',
      comp : <MailInput handleIV={handleIV} theme={theme} element={element}></MailInput>
    },
    {
      type : 'number',
      comp : <NumberInp handleIV={handleIV} theme={theme} element={element}></NumberInp>
    },
    {
      type : 'select',
      comp : <Select theme={theme} element={element} />
    },
    {
      type : 'res',
      comp : <Text handleIV={handleIV} theme={theme} element={element}/>
    },
    {
      type : 'addr',
      comp : <Address handleIV={handleIV} theme={theme} element={element}></Address>
    }
  ]

  return (
    <InputCardElem onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} $theme={theme}>
      {hover && <InfoDiv $theme={theme} onMouseDown={(e) => e.preventDefault()} onClick={() => setActive(!active)} onMouseLeave={() => setActive(false)} $active={active}>
        {active && <InfoText $theme={theme}>{element.info}</InfoText>}
        <Image style={{cursor : "pointer"}} src={theme === 'light' ? '/information-button-dark.png' :'/information-button.png'} alt="info" width={15} height={15}/>
      </InfoDiv>}
      {arr.find((e) => e.type === element.type) && arr.find((e) => e.type === element.type).comp}
    </InputCardElem>
  )
}

export default InputCard