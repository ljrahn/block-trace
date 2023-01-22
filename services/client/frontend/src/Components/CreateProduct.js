import React, { Component, useState, render } from 'react'
import { Button}  from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Instance from './Instance.js';
import '../App.css';

export default class CreateProduct extends Component {
    render() {
        return (

            <Container>
                <h1>Create Product</h1>

                <div class="box">

                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="pName" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Product Weight</Form.Label>
                                    <Form.Control type="pWeight" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Upload Product Document</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Declared Value (CAD$)</Form.Label>
                                    <Form.Control type="pWeight" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <br></br>
                        <br></br>


                        <Button variant="primary" type="submit" style={{ backgroundColor: '#353A3F', borderColor: '#353A3F' }}>
                            + Add Next Link
                        </Button>

                        <br></br>
                        <br></br>

                        <Instance/>


                        <Button variant="primary" type="submit" style={{ backgroundColor: '#1347C5', borderColor: '#1347C5' }}>
                            Submit
                        </Button>

                    </Form>
                </div>


            </Container>
        )
    }

}