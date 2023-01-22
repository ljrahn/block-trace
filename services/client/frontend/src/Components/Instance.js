import React, { Component, useState, render } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../App.css';

export default class Instance extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="pCompany" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Signer</Form.Label>
                            <Form.Control type="pSigner" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="pLocation" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Travel Method</Form.Label>
                            <Form.Control type="pSigner" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        )
    }
}