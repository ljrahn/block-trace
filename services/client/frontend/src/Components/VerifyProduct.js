import React, { Component, useState, render } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../App.css";
import { useAccount } from "./hooks/useAccount";
import IchnaeaAbi from "../assets/IchnaeaCore.json";
import { ethers } from "ethers";
import { Button } from "react-bootstrap";

const VerifyProduct = () => {
  const { provider } = useAccount();
  const [instanceId, setInstanceId] = useState(null);

  async function instantiateProduct(e) {
    e.preventDefault();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x539B0723076683e1804c80817B2A0db3FDC9352b",
      IchnaeaAbi.abi,
      signer
    );
    setInstanceId(ethers.utils.randomBytes(32));
    console.log(instanceId);
    try {
      const transaction = await contract.instantiateProductInstance(
        instanceId,
        e.target[0].value
      );

      const result = await transaction.wait();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <h1>Verify Product</h1>

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
    </Container>
  );
};

export default VerifyProduct;
