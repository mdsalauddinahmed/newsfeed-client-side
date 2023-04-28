import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto  ">
             <Link to="/category/0" className="text-decoration-none text-secondary">Home</Link>
             <Link to="/about" className="text-decoration-none mx-4 text-secondary">About</Link>
             <Link to="/career" className="text-decoration-none text-secondary">Career</Link>
            </Nav>
            <Nav>
            { user &&  
              
              <FaUser style={{fontSize:'2rem'}} className="me-3" ></FaUser>

             }

              {user?
                <Button variant="secondary">LogOut</Button>:
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Container>
    );
};

export default NavigationBar;