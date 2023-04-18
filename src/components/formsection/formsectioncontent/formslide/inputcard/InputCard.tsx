import { Input, InputCardElem, InputLabel } from "./styles"


function InputCard({theme, element}) {
  return (
    <InputCardElem $theme={theme}>
      <InputLabel $theme={theme} className="label">{element.label}</InputLabel>
      <Input $theme={theme} $type={element.type} $placeholder={element.label}/>
    </InputCardElem>
  )
}

export default InputCard