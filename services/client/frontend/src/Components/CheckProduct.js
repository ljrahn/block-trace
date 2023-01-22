import React, { Component, useState, render } from 'react'
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCT = gql`
query GetProduct {
        productCreateds(id:ID!, first: 5) {
          id
          productId
          productName
          productWeight
        }
        updateInstances(first: 5) {
          id
          instanceId
          productId
          timeStamp
        }
}
`;

function DisplayProduct() {
    const { loading, error, data } = useQuery(GET_PRODUCT);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.locations.map(({ productName, productWeight },idx) => (
      <div>
        <p>{productName}</p>
        <p>{productWeight}</p>
        <br />
      </div>
    ));
  }

  async function instantiateProduct(e) {
    e.preventDefault();
  }

const CheckProduct = () => {
        return (

            <Container>
                <h1>Check Product</h1>
                <Form onSubmit={instantiateProduct}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="productId">
              <Form.Label>Product ID</Form.Label>
              <Form.Control type="pName" placeholder="" />
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: "#1347C5", borderColor: "#1347C5" }}
        >
          Submit
        </Button>
      </Form>
      <DisplayProduct/>
            </Container>
        )
};