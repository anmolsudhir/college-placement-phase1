import React, {useState} from 'react'

function InputCard({elem}) {
    const [temp, setTemp] = useState(false)
    const handleClick = () => {
        setTemp(true)
    }

  return (
    <div className='elem'>
        {<label className='label-inp' htmlFor={elem.label}>{elem.label}:</label>}
        <input onFocus={handleClick} placeholder={elem.label} className='my-inp' name={elem.label} id={elem.label} label={elem.label}/>
    </div>
  )
}

export default InputCard