import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {
    const [packages,setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://bloodcurdling-pirate-24030.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[]);
    console.log(packages);
    return (
        <div id="packages" className="container mx-auto">
            <h1>Special Packages</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                packages.map(pack=>
                <Package key={pack._id} package={pack}/>
                )
            }
                
               
           </div>
        </div>
    );
};

export default Packages;