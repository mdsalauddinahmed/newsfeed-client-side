import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className="w-25 mx-auto mt-5">
        <h2>Please  Register</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type=" text" placeholder="Enter your name" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image url</Form.Label>
            <Form.Control type="text" name='photo' placeholder="Enter  Image url" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='name' placeholder="Enter email" />
           
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept all rules and condition" />
          </Form.Group>
  
          <Button variant="primary" type="submit">
          Register
          </Button>
          <br />
          <Form.Text className="text-muted">
              Don't have any account <Link to="/login"> Login</Link>
            </Form.Text>
          <Form.Text className="text-muted">
              
            </Form.Text>
          <Form.Text className="text-muted">
              
            </Form.Text>
        </Form>
      </Container>
    );
};

export default Register;