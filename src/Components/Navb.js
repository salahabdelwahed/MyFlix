import React from "react";
import "../CSS/Navbar.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const Navb = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MyFlix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Genre</Nav.Link> 
            <ul className="list">
            <li>Action</li>
            <li>Comedy</li>
            <li>Adventure</li>
            <li>War</li>
            <li>Drama</li></ul>
          
          </Nav>
        </Container>
        <Form.Control   type="text" placeholder="Search" className=" mr-sm-2" />
        <select >
        <option >EN</option>
        <option >FR</option>
        <option >AR</option>
        </select>
      </Navbar>
    </div>
  );
};

export default Navb;
