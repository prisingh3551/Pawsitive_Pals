import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement login logic here (e.g., send data to backend for authentication)
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <>
    <div className='container-fluid' id='print' style={{height: '100vh'}}>
        <div className='container' style={{height:'100px'}}></div>
        <div className='container justify-content-center' id='login-body'>
            <h1 id='login-heading' className='text-center'>LOGIN</h1>
            <Form onSubmit={handleSubmit} id='login'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='form-label'>Email address</Form.Label>
                <Form.Control className='form-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='form-input'
                type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" id="login-btn">
                    Login
                </Button>
            </Form>
        </div>
    </div>
    </>
  );
}

export default Login;
