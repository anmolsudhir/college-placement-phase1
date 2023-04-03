import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopBar from '../components/TopBar';
import FormSection from '../components/FormSection'
function Form() {

  return (
    <div >
      <Container fluid>
      <Col>
      <Row>
        <TopBar/>
      </Row>
      <Row>
        <FormSection/>
      </Row>
      </Col>
      </Container>
      
    </div>
  )
}

export default Form;