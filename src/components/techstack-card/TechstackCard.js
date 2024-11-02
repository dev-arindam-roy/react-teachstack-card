import React from 'react';
import TeachstackForm from './TeachstackForm';
import TeachstackCardView from './TeachstackCardView';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import './techstack-card-style.css';

const TechstackCard = () => {
  return (
    <>
      <Container fluid="md">
        <Row className='mt-5'>
          <Col xs={12} sm={12} md={5}>
            <TeachstackForm />
          </Col>
          <Col xs={12} sm={12} md={7}>
            <TeachstackCardView />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TechstackCard