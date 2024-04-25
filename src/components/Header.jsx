import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import logo from './logo.jpeg';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './Login';

function Header() {
    return (
        <>
        <nav className="navbar" id="header">
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
                <button className='btn btn-lg btn-outline-dark me-2' id='login-btn'>Login</button>
                <button className='btn btn-lg btn-outline-dark' id='signup-btn'>Sign-Up</button>
            </div>
        </div>
        </nav>
        </>
    );
}

export default Header;