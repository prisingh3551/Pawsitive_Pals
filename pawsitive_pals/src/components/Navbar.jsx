import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/mainpage.css';
import logo from '../images/logo.jpeg';

function Navbar() {
  return (
        <div className='header'>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className='logo d-flex'>
                        <img src={logo} alt='logo' id='logo-img'></img>
                        <p className="navbar-brand mx-3" id='name'>Pawsitive Pals</p>
                    </div>
                    <form className="d-flex justify-content-end" id='search' role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div>
                        <Link to="/Quiz" target='_blank' className='btn btn-lg btn-outline-dark me-3' id='quizBtn'>Take a Quiz</Link>
                        <Link to="/LoginSignup" className='btn btn-lg btn-outline-dark me-3' id='loginBtn' >
                            Login/Sign-Up
                        </Link>
                        
                    </div>                 
                </div>
             </nav>
        </div>
  );
}

export default Navbar;