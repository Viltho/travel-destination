import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'


function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="mycontainer">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Socials" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/Viltho">GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.instagram.com/vilthod/?hl=en">
                                Instagram
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://linkedin.com/in/a-a-h">LinkedIn</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation