import React from 'react'
import cat2 from '../images/cat2.jpeg';
import dog1 from '../images/dog1.png';
import './Styles.css';
function Articles() {
    return (
        <>
        <div className='container-fluid text-center' id='articles'>
            <div className='row'>
                <h1>All you need to know about your pets</h1>
            </div>
            <div className='row justify-content-center'>
                <div className='col-4 mx-5' id='article-dog'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <img src={cat2} id='moreCats'></img>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className="text-center">
                                <h1>Cat Adoption Articles</h1><br/>
                                <p>Helpful insights on what to expect.</p><br/>  
                                <a href="https://www.dailypaws.com/cats-kittens/health-care/ways-to-keep-your-cat-healthy" target='_blank'>
                                    <button type="button" className="btn btn-primary">READ MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 mx-5' id='article-cat'>
                <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <img src={dog1} id='moreCats'></img>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className="text-center">
                                <h1>Dog Adoption Articles</h1><br/>
                                <p>Helpful insights on what to expect.</p><br/>
                                <a href='https://www.forbes.com/advisor/pet-insurance/pet-care/dog-care-tips/' target='_blank'>
                                    <button type="button" className="btn btn-primary">READ MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        </>
    );
}

export default Articles;
 