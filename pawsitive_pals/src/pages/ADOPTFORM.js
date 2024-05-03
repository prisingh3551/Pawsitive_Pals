import React from 'react'
import './Form.css'
function ADOPTFORM(){
    return(
        <>
        <div className='formMain'>
            <div className='mainBody'>
                <div className='formHeading'>ADOPT A PET</div>
                <form className='formBody'>
                    <label className='formLabel'>Name</label>
                    <input type='text' htmlFor="name" className='formInput' required></input>
                    <label className='formLabel'>Email</label>
                    <input type='email' htmlFor="email" className='formInput'></input>
                    <label className='formLabel'>PET YOU WANT TO ADOPT</label>
                    <input type='text' htmlFor="petname" className='formInput'></input>
                    <label className='formLabel'>WHY YOU NEED TO ADOPT</label>
                    <textarea className='comment' rows='20' cols='30'>
                    </textarea>
                </form>
                <button className="formBtn" type='submit'>SUBMIT</button>
            </div>
        </div>
        </>
    );
}
export default ADOPTFORM;