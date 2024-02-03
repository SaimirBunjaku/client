import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand style={{fontSize:'40px',marginLeft:'20px'}}  href="#">Cryptnic</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Services</Nav.Link>
          <Nav.Link href="#">Token</Nav.Link>
          <Nav.Link href="#">Pages</Nav.Link>
          <Nav.Link href="#">FAQ</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        <Button className="get-in-touch-button">Get in Touch</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
