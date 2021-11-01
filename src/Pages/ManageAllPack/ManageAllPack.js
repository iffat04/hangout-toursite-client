import React, { useEffect, useState } from 'react';

const ManageAllPack = () => {

   

    const [order, setOrder]= useState([]);
    useEffect(()=>{
        fetch(`https://bloodcurdling-pirate-24030.herokuapp.com/booking`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
     console.log(order)

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
                const rest = order.filter(order=>order._id !== id);
                setOrder(rest);

            }
        })
    }

    }
    return (
        <div className=' d-flex flex-column justify-content-center '>
      
            <h1>MAnage all packages</h1>

            <div className="d-flex  flex-column justify-content-center w-md-50  mx-auto gap-4 bg-secondary p-5 rounded">
           {
               order.map(or=><div className="border px-md-1 p-2  d-flex align-items-center flex-column flex-md-row " key={or._id}>
                   <p>User:{or.email}</p>
                   <h4 className="bg-md-light my-2 w-50 mx-auto p-1 d-flex justify-content-center">{or?.packageName}</h4>
                   {or?.status?
                   <button>Pending</button>
                   :
                   <button>Approved</button>

                   }
                   <button onClick={()=>handledelete(or._id)} className="text-danger bg-dark p-md-2">X</button>
               </div>)
           }
        </div>


        </div>
    );
};

export default ManageAllPack;

