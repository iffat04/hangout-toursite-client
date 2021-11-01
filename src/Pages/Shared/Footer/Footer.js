import { Link } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="bg-dark mt-5 p-4 ">
        <div className=" d-md-flex justify-content-around  ">
            <div>
            <div className= "mt-5">
            <h2 className="text-warning">Contact Us </h2>
            <p className="text-white">Address: 75 road Banani, 
            <br/> Dhaka-1000,Bangladesh 
            <br/>
            Phone: +014 32311
            <br/>
            Email: <Link as={HashLink} to="/home#review" className="footer" >hangout_@gmail.com</Link>
            </p>
            </div>

            </div>
            
        </div>

        <p className="text-white mt-2 text-center"> copyright reserved @hangOut </p>
        </div>
    );
};

export default Footer;