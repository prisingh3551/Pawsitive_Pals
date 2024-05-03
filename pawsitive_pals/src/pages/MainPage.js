import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import MainImage from '../components/MainImage';
import PetsForAdoption from '../components/PetsForAdoption';
import Articles from '../components/Articles';
import ADR from '../components/ADR';
import AboutUs from '../components/AboutUs';

function MainPage(){
    
    return (
        <>
        <Navbar></Navbar>
        <MainImage></MainImage>
        <div className='darkGap'></div>
        <PetsForAdoption></PetsForAdoption>
        <div className='lightGap'></div>
        <div className='lightGap'></div>
        <div className='lightGap'></div>
        <ADR></ADR>
        <div className='lightGap'></div>
        <Articles></Articles>
        <AboutUs></AboutUs>
        </>
    );
}

export default MainPage;