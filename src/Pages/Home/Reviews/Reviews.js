import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Reviews = () => {
    return (
        <div id="review" className="container mx-auto">
            <h1>Give Your Valuable Review</h1>
            <div className="d-flex d-flex flex-column justify-content-start">
            
            <Form className="w-75 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <FloatingLabel className="my-3" controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
               
            </Form>
            <button  className="btn btn-warning w-25 mx-auto">Submit</button>
           
            </div>
        </div>
    );
};

export default Reviews;