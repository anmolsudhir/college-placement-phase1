import { Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react';
import FormSection from '../components/FormSection';
import React from 'react'

function Form() {
    const [clicked, setClicked] = useState(false)
    const handleOnClick = () => {
        setClicked(true)
    }
  return (
    <div className='form-container'>
        <Row className='form-container-row'>
            <Col className='sidebar' xs={2}>
                {/* <SideBar/> */}
            </Col>
            <Col className='section' xs={10}>
                <FormSection clicked = {clicked}/>
                <Row style={{width:"80%", display : "flex", justifyContent:"flex-end", alignItems:"flex-end", padding:"2%"}}>
                    <Button style={{width : "10%"}} onClick={handleOnClick}>Click</Button>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default Form;