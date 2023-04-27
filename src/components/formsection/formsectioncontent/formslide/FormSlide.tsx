import { FormSlideDiv, InputContainer, SlideHeader } from "./styles";
import InputCard from "./inputcard/InputCard";
import { useEffect, useMemo } from "react";

export default function FormSlide({theme, props, refv, idx, validateSlide}){

  let inputArr = useMemo(() => (props[0].content.map((elem) => elem.validable ? false : true)), []) 

  useEffect(() => {
    if(inputArr.every((elem) => elem === true)){
      validateSlide(idx, true)
    }
  },[])

  const validateInputs = (indx, validity) => {
    inputArr[indx] = validity
    console.log("Input : ", inputArr)
    if(inputArr.every((elem) => elem === true)){
      validateSlide(idx, true)
    }
    else validateSlide(idx, false)
  }
  let elems = props[0].content.map((elem, index) => <InputCard idx={index} validateInput={validateInputs} theme = {theme} key={`${elem.label}${idx}`} element={elem}></InputCard>)

  return (
    <FormSlideDiv $theme={theme} ref={refv[idx]}>
        <SlideHeader>{props[0].header}</SlideHeader>
        <InputContainer>{elems}</InputContainer>
    </FormSlideDiv>
  )
}