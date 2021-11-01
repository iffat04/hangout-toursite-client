import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Reviews = () => {
    const[post,setPost]= useState([]);
    const [status, setStatus]= useState(false);
    useEffect(()=>{
        fetch('https://bloodcurdling-pirate-24030.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{
            setPost(data);
        })
    },[status])

    const nameRef = useRef();
    const emailRef = useRef();
    const postRef = useRef(); 
    const ratingRef = useRef();

    const handlePost = ()=>{
    const rating = ratingRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const post = postRef.current.value;
    const review ={ rating , name, email, post};
    console.log(review);
    axios.post('https://bloodcurdling-pirate-24030.herokuapp.com/reviews',review)
    .then(res=>{
        console.log(res)
        ratingRef.current.value= "";
        nameRef.current.value="";
        emailRef.current.value="";
        postRef.current.value="";
        const statevalue = !status;
        setStatus(statevalue);

    })

    }


    return (
        <div id="review" className="container mx-auto">
            <h1>Give Your Valuable Review</h1>
            <div className="d-flex d-flex flex-column justify-content-start">
            
            <Form className="w-75 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" />
                </Form.Group>


                <FloatingLabel className="my-3" controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    ref={postRef} 
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
               
            </Form>
            <div> 
            <label for="vol">Give Rating (between 1 and 5):</label>
            <input ref={ratingRef} type="range" id="vol" name="vol" min="1" max="5" step="1" className="me-5" />
            <button onClick={handlePost}   className="btn btn-warning w-25 mx-auto">Submit</button>
            </div>
            </div>
            <div className="d-flex d-flex flex-column justify-content-start border w-75 mx-auto my-5 p-5"> 
                <h1 className="my-4">Blogs</h1>
                {
                    post.map(p=>
                    <div key={p._id} className="bg-secondary rounded-end rounded-bottom my-5 text-white p-3">
                        <h4>{p.name}</h4>
                        <p>
                            {p.post}
                        </p>
                        <p className="text-info">{p.email}</p>
                        <p className="text-warning">Rating: {p.rating}</p>


                    </div>)
                }

            </div>
        </div>
    );
};

export default Reviews;