import React from 'react'

function InputCard({elem}) {
  return (
    <div className='elem'>
        {<label className='label-inp' htmlFor={elem.label}>{elem.label}:</label>}
        <input placeholder={elem.label} className='my-inp' name={elem.label} id={elem.label} label={elem.label}/>
    </div>
  )
}

export default InputCard