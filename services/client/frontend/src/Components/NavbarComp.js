import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import CheckProduct from './CheckProduct';
import VerifyProduct from './VerifyProduct';
import CreateProduct from './CreateProduct';
import logo from '../Assets/logo.png';

export default class NavbarComp extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <img src={logo} alt="none" style={{ marginLeft: "2%"}} width="45px"/>
                        <Navbar.Brand style={{ height: '90px',padding: '25px', fontSize: "20pt"}} href="#">BlockTrace</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{  maxHeight: '300px', gap: '1.5em', height: '60px', paddingTop: '12px', paddingBottom: '0px', fontSize: "12pt"}}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/CreateProduct">Create Product</Nav.Link>
                                <Nav.Link as={Link} to="/VerifyProduct">Verify Product</Nav.Link>
                                <Nav.Link as={Link} to="/CheckProduct">Check Product</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path='CreateProduct' element={<CreateProduct/>} />
                        <Route path='VerifyProduct' element={<VerifyProduct/>} />
                        <Route path='CheckProduct' element={<CheckProduct/>} />
                    </Routes>
                </div>
            </Router>
        )
    }
}