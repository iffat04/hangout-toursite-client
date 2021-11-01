import React from 'react';
import img from '../../../images/a1.jpeg'
import './Banner.css'

const Banner = () => {
    return (
        <>
        <div id="banner" className="container mx-auto">
            <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="centeredText">
            <h2 className="text-info ">Travel Safe And Make Memories</h2>
        </div>
        </>
    );
};

export default Banner;