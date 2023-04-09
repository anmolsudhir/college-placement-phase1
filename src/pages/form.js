import React from 'react'
import TopBar from '../components/TopBar';
import FormSection from '../components/FormSection'

function Form({theme, toggleTheme}) {

  return (
    <div className='containers'>
      <TopBar theme={theme} toggleTheme={toggleTheme}/>
      <FormSection theme={theme}/>
    </div>
  )
}

export default Form;