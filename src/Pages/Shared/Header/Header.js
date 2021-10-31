import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../../hooks/useAuth';
const Header = () => {
    const {user, logOut} = UseAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link}  to="/home#home">HangOut</Navbar.Brand>
                    <Navbar.Toggle />
                   
                    <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                        <Nav.Link as={Link} to="/dashBoard">DashBoard</Nav.Link>
                    </Nav>   
                    {user.email?
                    <span>
                    <button>{user.displayName}</button>
                    <button onClick={logOut}>Log Out</button>
                    </span>
                    :
                    <Nav className="justify-content-end">
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>

                    }                   
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;