import { useState } from "react"
import { InfoDiv, InfoText, InputCardElem, InputLabel } from "./styles"
import Image from "next/image"
import Text from "@/components/inputs/text/Text"
import TeleInput from "@/components/inputs/tel/TeleInp"
import Radio from "@/components/inputs/radio/Radio"
import Date from "@/components/inputs/date/Date"
import MailInput from "@/components/inputs/mail/Mail"
import NumberInp from "@/components/inputs/number/Number"
import Select from "@/components/inputs/select/Select"
import Address from "@/components/inputs/address/Address"
import Result from "@/components/inputs/result/Result"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store/store"


function InputCard({element, idx, validateInput, handleHidden}) {
  const theme = useSelector((state : RootState) => state.theme.theme)
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)

  const handleIV = (validity, hidden) => {
    validateInput(idx, validity, hidden)
  }

  const arr = [
    {
      type : 'text',
      comp : <Text handleIV={handleIV} element={element}/>
    },
    {
      type : 'tel',
      comp : <TeleInput handleIV={handleIV} element={element} ></TeleInput>
    },
    {
      type : 'radio',
      comp : <Radio handleHidden={handleHidden} handleSelect={() => {}} element={element}></Radio>
    },
    {
      type : 'date',
      comp : <Date handleIV={handleIV} element={element} />
    },
    {
      type : 'mail',
      comp : <MailInput handleIV={handleIV} element={element}></MailInput>
    },
    {
      type : 'number',
      comp : <NumberInp handleIV={handleIV} element={element}></NumberInp>
    },
    {
      type : 'select',
      comp : <Select handleHidden={handleHidden} element={element} />
    },
    {
      type : 'res',
      comp : <Result handleIV={handleIV} element={element}/>
    },
    {
      type : 'addr',
      comp : <Address handleIV={handleIV} element={element}></Address>
    }
  ]

  return (
    <InputCardElem onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} $theme={theme}>
      {hover && <InfoDiv $width={"100%"} $theme={theme} onMouseDown={(e) => e.preventDefault()} onClick={() => setActive(!active)} onMouseLeave={() => setActive(false)} $active={active}>
        {active && <InfoText $theme={theme}>{element.info}</InfoText>}
        <Image style={{cursor : "pointer"}} src={theme === 'light' ? (active ? '/cross.png' : '/information-button-dark.png') :(active ? '/cancel.png' : '/information-button.png')} alt="info" width={15} height={15}/>
      </InfoDiv>}
      {arr.find((e) => e.type === element.type) && arr.find((e) => e.type === element.type).comp}
    </InputCardElem>
  )
}

export default InputCard