import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function Navbar() {
  return (
    <>
      <nav className='nav-bar'>      
          <ul className="nav-links" id='navigation'>
            <button className='nav-link' >All Pets</button>
            <button className='nav-link' >Dogs</button>
            <button className='nav-link' >Cats</button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
