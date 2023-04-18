import { FormSlideDiv, InputContainer, SlideHeader } from "./styles";
import InputCard from "./inputcard/InputCard";

export default function FormSlide({theme, props, refv, idx}){
  let elems = props[0].content.map((elem) => <InputCard theme = {theme} key={`${elem.label}${idx}`} element={elem}></InputCard>)

  return (
    <FormSlideDiv $theme={theme} ref={refv[idx]}>
        <SlideHeader>{props[0].header}</SlideHeader>
        <InputContainer>{elems}</InputContainer>
    </FormSlideDiv>
  )
}