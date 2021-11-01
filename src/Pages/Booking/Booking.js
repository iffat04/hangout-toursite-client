import React, { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useParams } from 'react-router';
import UseAuth from '../../hooks/useAuth';
import axios from 'axios';
const Booking = () => { 
    const { packId } = useParams();

    const { register, handleSubmit, reset, control } = useForm();
    const onSubmit = data =>{
        console.log(data);
        
        axios.post('https://bloodcurdling-pirate-24030.herokuapp.com/booking',data)
        .then(res=>{
            console.log(res);

            const id= res.data.insertedId;
            if(id){
                alert('order placed successfully');
                reset()
            }
        })
   }

   const {user} = UseAuth();

    const [service,setService]= useState({});
    useEffect(()=>{
        fetch(`https://bloodcurdling-pirate-24030.herokuapp.com/packages/${packId}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])
    //console.log();
     const {name,img,price,details}= service;
    return (
        <div className=' d-flex flex-column justify-content-center '>

        <h1>Book This Trip</h1>
        <h3 className="text-primary">Booking For {service.name}</h3>
        <div className="w-50 mx-auto"> 
            <div className="card p-3 h-100">
            <img src={img} className="card-img-top mx-auto" height="300px" width="200px" alt=""></img>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <h5>Price: <span id="name"> {price} </span> </h5>   
                <p className="card-text">{details}</p>

                </div>
            </div>

        </div>
        
        <form className="d-flex flex-column justify-content-center w-50 mx-auto gap-4 bg-secondary p-5 rounded" onSubmit={handleSubmit(onSubmit)}>
            <input className="rounded p-2" defaultValue={user?.displayName} required {...register("name", { required: true, maxLength: 20 })} />
            <input className="rounded p-2"  defaultValue={user?.email} required  {...register("email")}  />
            <input className="rounded p-2"  defaultValue={packId} required  {...register("id")}  />
            <input className="rounded p-2"  defaultValue={name} required  {...register("packageName")}  />
            <input className="rounded p-2"  {...register("phone")} placeholder="Phone Number"  />
            <input className="rounded p-2" {...register("address")} placeholder="Address" />
            <div>
            <input type="radio"  className="btn-lg" required value={true} {...register("status")}  />
            <label class="form-check-label" for="flexCheckChecked">
                click Checked 
            </label>
            </div>
            <input className="rounded bg-primary p-2 text-white fs-5 w-25 mx-auto" type="submit" />
        </form>

    </div>
    );
};

export default Booking;
