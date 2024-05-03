import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function MainImage(){
    return(
        <>
        <div>
            <nav className='nav-bar'>      
                <ul className="nav-links" id='categories'>
                    <Link to="/AllPets" className='btn btn-lg' style={{color: "#DDD0CB", fontWeight: 'bolder'}}>ALL PETS</Link>
                    <Link to="/CatsPage" className='btn btn-lg' style={{color: "#DDD0CB", fontWeight: 'bolder'}}>CATS</Link>
                    <Link to="/DogsPage" className='btn btn-lg' style={{color: "#DDD0CB", fontWeight: 'bolder'}}>DOGS</Link>
                </ul>
            </nav>
        </div>
        <div className='main'>
            <div className="container-fluid" id="img-bg">
                <h1 id='tagline' >Find Your Perfect Companion.</h1>
            </div>
        </div>
        
        </>
    )
}

export default MainImage;