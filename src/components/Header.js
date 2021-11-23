import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Home from './Home';

export default function Header() {
    return (
        <>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/contactus"}>Contact Us</Nav.Link>
                            <Nav.Link as={Link} to={"/aboutus"}>About Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/aboutus" element={<Aboutus />}></Route>
                    <Route path="/contactus" element={<Contactus />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    )
}
