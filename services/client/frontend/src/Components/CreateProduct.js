import React, { Component, useState, render, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Company from "./Company.js";
import { ethers } from "ethers";
import IchnaeaAbi from "../assets/IchnaeaCore.json";
import "../App.css";
import { useAccount } from "./hooks/useAccount.js";

const CreateProduct = () => {
  const { provider } = useAccount();
  const [companyInstances, setCompanyInstances] = useState([Company]);

  function addCompanyInstance() {
    setCompanyInstances([Company, ...companyInstances]);
  }

  useEffect(() => {
    console.log(provider);
  }, [provider]);

  async function createProduct(e) {
    e.preventDefault();
    const product = {
      productName: e.target[0].value,
      productWeight: e.target[1].value,
      ipfsDocumentUrl: "ipfs://",
    };
    const supplyChainRoute = [];
    for (let i = 4; i < e.target.length - 1; i += 4) {
      supplyChainRoute.push({
        companyName: e.target[i].value,
        signer: e.target[i + 1].value,
        location: e.target[i + 2].value,
        travelMethod: e.target[i + 3].value,
      });
    }

    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0xbd3b64162fb20E3229Ef8f918d5C2033799d41Da",
      IchnaeaAbi.abi,
      signer
    );

    try {
      const transaction = await contract.createProduct(
        product,
        supplyChainRoute
      );

      await transaction.wait();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <h1>Create Product</h1>

      <div class="box">
        <Form onSubmit={createProduct}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="pName" placeholder="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="productWeight">
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
          </Row>

          <br></br>
          <br></br>

          <Button
            variant="primary"
            type="button"
            onClick={addCompanyInstance}
            style={{ backgroundColor: "#353A3F", borderColor: "#353A3F" }}
          >
            + Add Next Link
          </Button>

          <br></br>
          <br></br>

          {companyInstances.map((CompanyInstance, idx) => (
            <div key={idx}>
              <div className="bold">{idx + 1}.</div>
              <CompanyInstance />
            </div>
          ))}

          <Button
            variant="primary"
            type="submit"
            style={{ backgroundColor: "#1347C5", borderColor: "#1347C5" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CreateProduct;
