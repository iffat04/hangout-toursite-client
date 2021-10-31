import React from 'react';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const{name, price, details, img,_id}= props.package;
    //console.log(_id)
    return (
        <div className="col">
            <div className="card p-3 h-100">
            <img src={img} className="card-img-top picture mx-auto" alt=""></img>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <h5>Price: <span id="name"> {price} </span> </h5>
                
                
                <p className="card-text">{details}</p>
                 
                 <Link to={`/booking/${_id}`}>
                <button className="fs-6">Book Now</button>
                 </Link>

                </div>
            </div>
        
  
        </div>
    );
};

export default Package;