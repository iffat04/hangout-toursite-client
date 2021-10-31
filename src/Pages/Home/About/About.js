import React from 'react';
import img from '../../../images/a19.jpeg'
const About = () => {
    return (
        <div id="about" className=" d-flex justify-content-center container mx-auto gap-5 my-5 rounded" > 
            
            <div className="d-flex flex-column justify-content-center  container">
                <h1>About Us</h1>
                <p>
                HangOut Bangladesh is the most experienced and well equipped 
                tour operator in Bangladesh. Our vision is to be recognized as 
                a leading provider of quality travel and tourism services worldwide. 
                And to achieve that goal we are enterprising largely and relentlessly.
                Tourists from all over the world who have already traveled using our 
                services can testify about our sincerity and uncompromising quality.
                </p>
            </div>
            <div className="w-50 mb-5">
                <img src={img} height="400px"  alt="" />
            </div>
        </div>
    );
};

export default About;