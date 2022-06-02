import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Navbar.css';


function NavigationBar () {
    return (
        <Navbar className="mb-5 pb-3" variant="dark"  sticky="top" expand="lg">
            <Container className='navbar'>
              <Navbar.Brand className="text-white" href="/">Sr.Paulo</Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='navbar-linkers2'>
                    <Nav className="me-auto navbar-linkers">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link> 
                        <Nav.Link href='/contact'>Contact</Nav.Link> 
                        <Nav.Link href='/history'>History</Nav.Link>
                        <Nav.Link href='/gallery'>Gallery</Nav.Link>
                        <Nav.Link href='/references'>References</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};


export default NavigationBar;