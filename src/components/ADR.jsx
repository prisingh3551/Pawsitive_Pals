import React from 'react'
import './Styles.css';

function ADR() {
    return (
        <>
            <nav className='nav-bar'>      
                <ul className="nav-links" id='adr'>
                    <button className='nav-link col-2' id='adopt'>ADOPT</button>
                    <button className='nav-link col-2' id='donate' >DONATE</button>
                    <button className='nav-link col-2' id='rehome'>REHOME</button>
                </ul>
            </nav>
        </>
    );
}
export default ADR;