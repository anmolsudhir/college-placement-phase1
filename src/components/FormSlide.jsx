import React from 'react'

function FormSlide({props, classes}) {
  console.log(props)
  return (
    <div className={`form-slide ${classes}`}>{props[0].header}</div>
  )
}

export default FormSlide