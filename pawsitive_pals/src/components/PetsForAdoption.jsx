import React from 'react';
import {Link} from 'react-router-dom';
import './PetsForAdoption.css';
import cat1 from '../images/cat1.jpeg';
import cat2 from '../images/cat2.jpeg';
import cat3 from '../images/cat3.jpeg';
import cat4 from '../images/cat4.jpeg';
import dog1 from '../images/dog1.png';
import dog2 from '../images/dog2.png';
import dog3 from '../images/dog3.png';
import dog4 from '../images/dog4.png';


const PetsForAdoption = () => {
    return(
        <div className='petsNear'>
            <div className='petsHeading'> Pets Available For Adoption Nearby</div>
            <div className='petsFrame'>
                {/* <Link to="/cats-page"> */}
                    <img className='petsFrameIcon' src={cat1}></img>
                {/* </Link> */}
                {/* <Link to="/cats-page"> */}
                    <img className='petsFrameIcon' src={cat2}></img>
                {/* </Link> */}
                {/* <Link to="/cats-page"> */}
                    <img className='petsFrameIcon' src={cat3}></img>
                {/* </Link> */}
                {/* <Link to="/cats-page"> */}
                    <img className='petsFrameIcon' src={cat4}></img>
                {/* </Link> */}

                {/* <Link to="/dogs-page"> */}
                    <img className='petsFrameIcon' src={dog1}></img>
                {/* </Link> */}
                {/* <Link to="/dogs-page"> */}
                    <img className='petsFrameIcon' src={dog2}></img>
                {/* </Link> */}
                {/* <Link to="/dogs-page"> */}
                    <img className='petsFrameIcon' src={dog3}></img>
                {/* </Link> */}
                {/* <Link to="/dogs-page"> */}
                    <img className='petsFrameIcon' src={dog4}></img>
                {/* </Link> */}
            </div>
        </div>
    );
}

export default PetsForAdoption;