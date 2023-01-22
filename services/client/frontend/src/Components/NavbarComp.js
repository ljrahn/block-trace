import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import CheckProduct from './CheckProduct';
import VerifyProduct from './VerifyProduct';
import CreateProduct from './CreateProduct';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <img src={logo} style={{width:'2.8%', marginLeft: '0.7%'}}/>
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