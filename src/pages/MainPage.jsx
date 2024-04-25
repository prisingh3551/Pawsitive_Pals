import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Styles.css';
import cat1 from '../images/cat1.jpeg';
import cat3 from '../images/cat3.jpeg';
import cat4 from '../images/cat4.jpeg';
import cat5 from '../images/cat5.jpeg';
import cat6 from '../images/cat6.jpeg';
import cat7 from '../images/cat7.jpeg';
import cat8 from '../images/cat8.jpeg';
import cat9 from '../images/cat9.jpeg';

function MainPage(){
    
    return (
        <>
        <div className='main'>
            <div className="container-fluid" id="img-bg">
                <h1 id='tagline' >Find Your Perfect Companion.</h1>
            </div>
            <div className='container text-center'>
                <h1>
                    Pets available for adoption near you
                </h1>
            </div>
        <div className='grid-container'>
            <a className='pet' href=''>
                <article>
                    <div className='grid-item'>
                        <img className='pet-image' src={cat1} />
                        <h4>Shuri</h4>
                    <p>Breed : </p>
                    <p>Color : </p>
                    <p>Gender : </p>
                </div>
            </article>
        </a>
        <a className='pet' href=''>
            <article>
                <div className='grid-item'>
                    <img className='pet-image' src={cat3} />
                    <h4>Shuri</h4>
                    <p>Breed : </p>
                    <p>Color : </p>
                    <p>Gender : </p>
                </div>
            </article>
        </a>
        <a className='pet' href=''>
            <article>
                <div className='grid-item'>
                    <img className='pet-image' src={cat4} />
                    <h4>Shuri</h4>
                    <p>Breed : </p>
                    <p>Color : </p>
                    <p>Gender : </p>
                </div>
            </article>
        </a>
        <a className='pet' href=''>
            <article>
                <div className='grid-item'>
                    <img className='pet-image' src={cat5} />
                    <h4>Shuri</h4>
                    <p>Breed : </p>
                    <p>Color : </p>
                    <p>Gender : </p>
                </div>
            </article>
        </a>
        <a className='pet' href=''>
            <article>
                <div className='grid-item'>
                    <img className='pet-image' src={cat6} />
                    <h4>Shuri</h4>
                    <p>Breed : </p>
                    <p>Color : </p>
                    <p>Gender : </p>
                </div>
            </article>
        </a>
        <a className='pet' href=''>
            <article>
                <div className='grid-item'>
                    <img className='pet-image' src={cat7} />
                    <h4>Shuri</h4>
                    <p>Breed : </p>
                    <p>Color : </p>
                    <p>Gender : </p>
                </div>
            </article>
        </a>
        <a className='pet' href=''>
            <article>
                <div className='grid-item'>
                    <img className='pet-image' src={cat8} />
                    <h4>Shuri</h4>
                    <p>Breed : </p>
                    <p>Color : </p>
                    <p>Gender : </p>
                </div>
            </article>
        </a>
        <a className='pet' href=''>
            <article>
                <div className='grid-item'>
                    <img className='pet-image' src={cat9} />
                    <h4>Shuri</h4>
                    <p>Breed : </p>
                    <p>Color : </p>
                    <p>Gender : </p>
                </div>
            </article>
        </a>
        
    </div>
        </div>
        </>
    );
}

export default MainPage;