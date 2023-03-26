import Container from 'react-bootstrap/Container';
import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import logo from './111.png'
import { Button, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Kids from '../Pages/Kids';
import Women from '../Pages/Women';
import Men from '../Pages/Men';
import Top from '../Pages/Top';
import Promotion from '../Pages/Promotion';


    export default class Header extends Component {
        render() {
            return (
                <>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  text="dark" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo}
                            height="80"
                            width="200"
                            className="d-inline-block align-top"
                            alt="Logo"/>
                        </Navbar.Brand>
                        <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link as={Link} to="/kids">Kids</Nav.Link>
                        <Nav.Link as={Link} to="/women">Women</Nav.Link>
                        <Nav.Link as={Link} to="/men">Men</Nav.Link>
                        <Nav.Link as={Link} to="/top">Top Sales</Nav.Link>
                        <Nav.Link as={Link} to="/promotion">Promotion</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-2" />
                            <Button variant="outline-secondary" >Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/about' element={<About us/>} />
                        <Route path='/kids' element={<Kids/>} />
                        <Route path='/women' element={<Women/>} />
                        <Route path='/men' element={<Men/>} />
                        <Route path='/top' element={<Top Sales/>} />
                        <Route path='/promotion' element={<Promotion/>} />
                    </Routes>
                </Router>
                </>
            )
        }
    }