import React from 'react'

function InputCard({elem}) {
  return (
    <div className='elem'>
        <label for={elem.label}>{elem.label}</label>
        <input className='my-inp' name={elem.label} id={elem.label} label={elem.label}/>
    </div>
  )
}

export default InputCard