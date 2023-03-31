import React from 'react'

function FormSection(clicked) {
   let isVisble = [false, false, false, false]
  return (
    <div className={clicked.clicked ? 'form-section fade' : 'form-section'}>
    </div>
  )
}

export default FormSection