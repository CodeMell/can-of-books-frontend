import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav'>
      <Navbar.Brand>My Favorite Books</Navbar.Brand>
      <Nav.Item>
        <Link to="/" className="nav-link">Home</Link></Nav.Item>
      {/* PLACEHOLDER: render a navigation link to the about page */}
      <Nav.Item>
        <Link to="/about" className="nav-link">About</Link>
      </Nav.Item>
    </Navbar>
  );
};

export default Header;
