import { FormSlideDiv, InputContainer, SlideHeader } from "./styles";
import InputCard from "./inputcard/InputCard";
import {useState, useEffect, useMemo } from "react";

export default function FormSlide({theme, props, refv, idx, validateSlide}){

  let inputArr = useMemo(() => (props[0].content.map((elem) => elem.validable ? false : true)), [])
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if(inputArr.every((elem) => elem === true)){
      validateSlide(idx, true)
    }
  },[])

  useEffect(() => {
    if(isHidden){
      props[0].content.forEach((elem, idx) => {
        if(elem.hidden){
          inputArr[idx] = true
        }
      });
    }
    else{
      props[0].content.forEach((elem, idx) => {
        if(elem.hidden){
          inputArr[idx] = elem.validable ? false : true
        }
      });
    }

    if(inputArr.every((elem) => elem === true)){
      validateSlide(idx, true)
    }
    else validateSlide(idx, false)
  }, [isHidden])

  const validateInputs = (indx, validity) => {
    console.log(inputArr)
    inputArr[indx] = validity
    if(inputArr.every((elem) => elem === true)){
      validateSlide(idx, true)
    }
    else validateSlide(idx, false)
  }

  const handleHidden = (e) => {
    setIsHidden(e) 
  }

  let elems = props[0].content.map((elem, index) => !elem.hidden && <InputCard handleHidden={handleHidden} idx={index} validateInput={validateInputs} theme = {theme} key={`${elem.label}${idx}`} element={elem}></InputCard>)
  let hiddenElems = props[0].content.map((elem, index) => elem.hidden && <InputCard handleHidden={handleHidden} idx={index} validateInput={validateInputs} theme = {theme} key={`${elem.label}${idx}`} element={elem}></InputCard>)

  return (
    <FormSlideDiv $theme={theme} ref={refv[idx]}>
        <SlideHeader>{props[0].header}</SlideHeader>
        <InputContainer>
          {elems}
          {!isHidden && hiddenElems}
        </InputContainer>
    </FormSlideDiv>
  )
}