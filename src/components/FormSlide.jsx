import React from 'react'
import InputCard from './InputCard'

function FormSlide({props, classes, refv}) {
  let elems = props[0].content.map((elem) => <InputCard elem={elem}></InputCard>)
  return (
    <div className={`form-slide ${classes}`}>
      <div className='header'>{props[0].header}</div>
      <div className='inputs'>{elems}</div>
    </div>
  )
}

export default FormSlide