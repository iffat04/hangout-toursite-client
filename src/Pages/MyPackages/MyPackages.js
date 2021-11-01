import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/useAuth';

const MyPackages = () => {
    const {user}= UseAuth();
    const email = user.email;
    const [myOrder, setMyorder]= useState([]);
    useEffect(()=>{
        fetch(`https://bloodcurdling-pirate-24030.herokuapp.com/booking/${email}`)
        .then(res=>res.json())
        .then(data=>setMyorder(data))
    },[])
     console.log(myOrder)

    const handledelete = id =>{
        const proceed = window.confirm('are you sure to Delete?')
        if(proceed){
        console.log('clicked')
        const url = `https://bloodcurdling-pirate-24030.herokuapp.com/packages/${id}`;
        console.log(url);
        fetch(`https://bloodcurdling-pirate-24030.herokuapp.com/packages/${id}`,{
            method : 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted this order');
                const rest = myOrder.filter(order=>order._id !== id);
                setMyorder(rest);

            }
        })
    }

    }

    return (
        <div className=' d-flex flex-column justify-content-center '>
        <h1>My Packages</h1>
        
        <div className="d-flex flex-column justify-content-center w-50 mx-auto gap-4 bg-secondary p-5 rounded">
           {
               myOrder.map(order=><div className="d-flex align-items-center flex-column flex-md-row " key={order._id}>
                   <h4 className="bg-md-light my-2 w-50 mx-auto p-1 d-flex justify-content-center">{order?.packageName}</h4>
                   <button onClick={()=>handledelete(order._id)} className="text-danger bg-dark p-md-2">X</button>
               </div>)
           }
        </div>

    </div>
    );
};

export default MyPackages;