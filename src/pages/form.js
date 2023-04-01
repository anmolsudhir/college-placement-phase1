import { Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react';
import FormSection from '../components/FormSection';
import SideBar from '../components/SideBar';
import React from 'react'

function Form() {
    const [collapsed, setCollapsed] = useState(true)
    const [clicked, setClicked] = useState(false)

    const handleMouseEnter = () => {
        console.log('Mouse Enter')
        setCollapsed(!collapsed)
    }

    const handleMouseLeave = () => {
        console.log('Mouse Leave')
        setCollapsed(!collapsed)
    }

    const handleOnClick = () => {
        setClicked(true)
    }
  return (
    <div className='form-container'>
        <Row className='form-container-row'>
            <Col className={collapsed ? 'fade-in sidebar' : 'fade-out sidebar'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SideBar collapsed={collapsed}/>
            </Col>
            <Col className='section' xs={collapsed ? 11 : 11}>
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