import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import   { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const {CreateUser}=useContext(AuthContext)
    const [accepted,setAccepted]=useState(false)

    const handleCheck=event=>{
         setAccepted(event.target.checked)
    }
      
    const handleSubmit= event =>{
        event.preventDefault()
        const form =event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
         
        console.log(name,photo,email,password)
        
        CreateUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <Container className="w-25 mx-auto mt-5">
        <h2>Please  Register </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type=" text" name='name' placeholder="Enter your name" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image url</Form.Label>
            <Form.Control type="text" name='photo' placeholder="Enter  Image url" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
           
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
            onClick={handleCheck}
             type="checkbox" 
             name='accept'
              label={<>Accept <Link to="/terms">all rules and condition</Link> </>} />
          </Form.Group>
  
          <Button variant="primary" disabled={ ! accepted} type="submit">
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