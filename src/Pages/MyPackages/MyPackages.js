import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/useAuth';

const MyPackages = () => {
    const {user}= UseAuth();
    const email = user.email;
    const [myOrder, setMyorder]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/booking/${email}`)
        .then(res=>res.json())
        .then(data=>setMyorder(data))
    },[])
     console.log(myOrder)

    const handledelete = id =>{
        const proceed = window.confirm('are you sure to Delete?')
        if(proceed){
        console.log('clicked')
        const url = `http://localhost:5000/packages/${id}`;
        console.log(url);
        fetch(`http://localhost:5000/packages/${id}`,{
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
               myOrder.map(order=><div key={order._id}>
                   <h3 className="bg-light my-2 w-50 mx-auto p-1 d-flex justify-content-between ">{order?.packageName}  <button onClick={()=>handledelete(order._id)} className="text-danger bg-dark p-2">X</button></h3>
               </div>)
           }
        </div>

    </div>
    );
};

export default MyPackages;