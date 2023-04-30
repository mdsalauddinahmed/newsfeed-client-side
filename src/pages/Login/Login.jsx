import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const{signIn}=useContext(AuthContext)
    const [error,setError]=useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'
    
  const handleLogin =event=>{
    event.preventDefault()
    const form= event.target;
    const email = form.email.value;
    const  password = form.password.value;
    console.log(email, password)
     
    signIn(email,password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from,{replace:true})
    })
    .catch(error =>{
         setError( 'sorry its not suitable');
    })

  }
      

  return (
    <Container className="w-25 mx-auto mt-5">
      <h2>Please Login</h2>
      <Form onSubmit={handleLogin} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name= 'password' placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check" />
        </Form.Group>

        <Button variant="primary" type="submit">
           Login
        </Button>
        <br />
        <Form.Text className="text-muted">
            Don't have any account <Link to="/register">Register</Link>
          </Form.Text>
          <br />
        <Form.Text className="  text-warning">
            {error}
          </Form.Text>
        <Form.Text className="text-muted">
            
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
