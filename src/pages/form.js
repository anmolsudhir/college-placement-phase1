import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopBar from '../components/TopBar';
import FormSection from '../components/FormSection'
function Form() {

  return (
    <div className='containers'>
        <TopBar/>
        <FormSection/>
    </div>
  )
}

export default Form;