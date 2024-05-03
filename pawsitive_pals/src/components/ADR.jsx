import React from 'react'
import '../pages/mainpage.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function ADR() {
    return (
        <>
            <nav className='nav-bar'>      
                <ul className="nav-links" id='adr'>
                    <Link to='/ADOPTFORM' className='nav-link col-2' id='adopt'>ADOPT</Link>
                    <Link to='/Donate' className='nav-link col-2' id='donate' >DONATE</Link>
                    <Link to='/Rehome' className='nav-link col-2' id='rehome'>REHOME</Link>
                </ul>
            </nav>
        </>
    );
}
export default ADR;