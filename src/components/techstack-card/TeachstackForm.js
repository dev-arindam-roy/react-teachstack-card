import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { LiaIdCard } from "react-icons/lia";
import './techstack-card-style.css';

const TeachstackForm = () => {
  return (
    <>
        <Card>
            <Card.Header>
            <Row>
                <Col>
                <h3><LiaIdCard size="1.4em" /> <strong>TechStack - Card</strong></h3>
                </Col>
            </Row>
            </Card.Header>
            <Card.Body>

            </Card.Body>
            <Card.Footer>

            </Card.Footer>
        </Card>
    </>
  )
}

export default TeachstackForm