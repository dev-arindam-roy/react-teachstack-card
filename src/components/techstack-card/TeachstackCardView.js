import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoIdCardOutline } from "react-icons/io5";
import { FiArrowDown } from "react-icons/fi";
import './techstack-card-style.css';

const TeachstackCardView = () => {
  return (
    <>
        <Card>
            <Card.Header>
                <Row>
                    <Col>
                        <h3><IoIdCardOutline size="1.4em" /> <strong>Your TechStack - Card</strong></h3>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>

            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col className='text-right'>
                        <Button type='button' variant="primary"><FiArrowDown /> Download</Button>{' '}
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    </>
  )
}

export default TeachstackCardView