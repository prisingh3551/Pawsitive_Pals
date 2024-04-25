import React from 'react'

function AboutUs(){
    return(
        <>
            <div className='container-fluid ps-5' id='about-us'>
                <div className='row mx-3'>
                    <div className='col-3 p-2'>
                        <h2>About Us</h2>
                        <p>At Pawsitive Pals, we believe that every pet deserves a loving forever home. We're a passionate group dedicated to connecting wonderful animals with the perfect families. Whether you're looking to adopt a loving companion or simply want to support our mission, we welcome you to join the Pawsitive Pals family.
                        </p>
                    </div>
                    <div className='col-3 px-3 py-2'>
                        <h2>Our Mission</h2>
                        <p>To find responsible and loving homes for homeless pets.To advocate for animal welfare and promote responsible pet ownership.To build a supportive community of pet lovers who share our passion.<br></br>
                        Together, we can make a difference in the lives of countless animals.
                        </p>
                    </div>
                    <div className='col-3 py-2 px-3'>
                        <h2>Contact Us</h2>
                        <p>Email: abc@gmail.com</p>
                        <p>Phone: +91-123-456-7890</p>
                        <p>Facebook: abcdefghij@pawsitivepals</p>
                        <p>Instagram: abcdefghij@PawsitivePals</p>
                        <p>Twitter: abcdefghij@PawsitivePals</p>
                    </div>
                    <div className='col-3 py-2 px-3'>
                        <h2>Address</h2>
                        <p>Pawsitive Pals Animal Shelter<br></br>
                        123 Main Street<br></br>
                        XYZ City<br></br>
                        BAC STATE<br></br>
                        Anytown, CA 12345</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;