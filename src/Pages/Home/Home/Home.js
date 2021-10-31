import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div id="home">
        
            <Banner></Banner>
            <Packages></Packages>
            <About></About>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;