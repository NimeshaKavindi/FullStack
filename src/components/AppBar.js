import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

const AppBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="mx-auto">Full Stack App</Navbar.Brand>
    </Navbar>
  );
};

export default AppBar;
