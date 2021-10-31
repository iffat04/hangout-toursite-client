import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddPackages = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
     console.log(data);
     axios.post('http://localhost:5000/packages',data)
     .then(res=>{
        console.log(res);
        console.log('abc')
        const id= res.data.insertedId;
        if(id){
            alert('inserted successfully');
            reset()
        }
    })
}

    return (
        <div className=' d-flex flex-column justify-content-center '>
        <h1>Add New Packages</h1>
        
        <form className="d-flex flex-column justify-content-center w-50 mx-auto gap-4 bg-secondary p-5 rounded" onSubmit={handleSubmit(onSubmit)}>
            <input className="rounded p-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea className="rounded p-3"  {...register("description")} placeholder="description" />
            <input className="rounded p-2"  type="number" {...register("price")} placeholder="Price" />
            <input className="rounded p-2" {...register("img")} placeholder="Image-URL" />
            <input className="rounded bg-primary p-2 text-white fs-5 w-25 mx-auto" type="submit" />
        </form>

    </div>
    );
};

export default AddPackages;
