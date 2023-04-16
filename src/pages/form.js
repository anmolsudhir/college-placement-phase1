import { Row, Col, Button} from 'react-bootstrap'
import FormSection from '../components/FormSection';
import SideBar from '../components/SideBar';
import React from 'react'

function Form() {

  return (
    <div className='form-container'>
        <Row className='form-container-row'>
            <Col className='sidebar'>
                <SideBar/>
            </Col>
            <Col className='section' xs={11}>
                <FormSection/>
                {/* <div className='button-group'> */}
                    {/* <Button variant='dark' className='my-btn'>Previous</Button> */}
                    {/* <Button variant='dark' className='my-btn'>Next</Button> */}
                {/* </div> */}
            </Col>
        </Row>
    </div>
  )
}

export default Form;