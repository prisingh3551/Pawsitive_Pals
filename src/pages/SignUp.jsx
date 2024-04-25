import React, { useState } from 'react';
import '../components/Styles.css';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement form validation and submission logic here (e.g., call an API)
    console.log('Submitted signup form:', formData);
  };

  return (
    <>
    <div className='container-fluid' id='signup-bg' style={{height: '100vh'}}>
        <div className='container' style={{height: '100px'}}></div>
        <div className='container justify-content-center' id='signup-body'>
            <h1 className='text-center' id='signup-heading'>SIGN UP</h1>
            <form onSubmit={handleSubmit} id='signup'>
            <label htmlFor="email" className='signup-label'>Email:</label>
            <input  className='signup-input'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="password" className='signup-label'>Password:</label>
            <input  className='signup-input'
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <label htmlFor="confirmPassword" className='signup-label'>Confirm Password:</label>
            <input  className='signup-input'
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />
            <button type="submit" id='signup-submit'>Sign Up</button>
            </form>

        </div>
    </div>
    </>
  );
}

export default SignUp;
