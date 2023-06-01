import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav">
      <Navbar.Brand>My Favorite Books</Navbar.Brand>
      <Nav.Item>
        <Link to="/" className="nav-link">Home</Link>
      </Nav.Item>
      {/* render a navigation link to the about page */}
      <Nav.Item>
        <Link to="/about" className="nav-link">About</Link>
      </Nav.Item>
      {isAuthenticated ? (
        <Button variant="light" onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </Button>
      ) : (
        <Button variant="light" onClick={loginWithRedirect}>
          Login
        </Button>
      )}
    </Navbar>
  );
};

export default Header;
