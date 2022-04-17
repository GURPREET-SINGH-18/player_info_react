import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  { Navbar, Container, Nav } from 'react-bootstrap';
// import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const Mynav = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <LinkContainer to="/">
            <Navbar.Brand >CricInfo</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/addplayer">
                <Nav.Link to='/'>Add Player</Nav.Link>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Mynav;
