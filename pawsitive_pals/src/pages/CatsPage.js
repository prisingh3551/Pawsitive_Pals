import React from 'react'
import  { Link } from 'react-router-dom';
import './cats.css';
import ADOPTFORM from './ADOPTFORM';

const CatsPage = () => {
    return (
        <>
            <div className='home'>
                <Link to='/'>Home</Link>
            </div>
            <div className='catsHeading'>FIND YOUR IDEAL PET CAT
            </div>
            <div className=''>

            </div>
        </>
    );
}

export default CatsPage;