import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import FormSlide from './FormSlide'

function FormSection() {

  const [idx, setIdx] = useState(0)
  const [transit, setTransit] = useState(null)
  const [disabledNext, setDisabledNext] = useState(false)
  const [disabledPrev, setDisabledPrev] = useState(true)

  let slideArray = [true, false, false, false, false, false]

  const handlePrevClick = () => {
    setTransit("prev")
    if(idx - 1 >= 0){
      setDisabledNext(false)
      slideArray[idx] = false
      slideArray[idx-1] = true
      setIdx(idx-1)
    }
    if(idx === 1) setDisabledPrev(true)
    console.log(idx)
  }

  const handleNextClick = () => {
    setTransit("next")
    if(idx + 1 < slideArray.length){
      setDisabledPrev(false)
      slideArray[idx] = false
      slideArray[idx+1] = true
      setIdx(idx+1)
    }
    if(idx === 4) setDisabledNext(true)
    console.log(idx)
  }

  return (
    <div className='form-section'>
      <div className='form-section-content'>
        <FormSlide key={idx*2} props = {idx+1} classes={transit}/>
      </div>
      <div className='form-btn-group'>
        <Button disabled={disabledPrev} onClick={handlePrevClick}>Previous</Button>
        <Button disabled={disabledNext} onClick={handleNextClick}>Next</Button>
      </div>
    </div>
  )
}

export default FormSection