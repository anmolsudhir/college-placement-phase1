import React, { useRef } from 'react'
import InputCard from './InputCard'

function FormSlide({props, classes, refv, idx}) {
  let elems = props[0].content.map((elem) => <InputCard key={`${elem.label}${idx}`} elem={elem}></InputCard>)

  return (
    <div ref={refv[idx]} className={`form-slide ${classes}`}>
      <div className='header'>{props[0].header}</div>
      <div className='inputs'>{elems}</div>
    </div>
  )
}

export default FormSlide