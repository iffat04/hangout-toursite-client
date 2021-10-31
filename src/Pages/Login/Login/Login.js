import React from 'react';
import { Redirect, useLocation } from 'react-router';
import UseAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,user} = UseAuth();
    const location = useLocation();
    const redirectedPath = location.state?.from?.pathname || "/";
    console.log(user)
    return (
        <div className="container d-flex justify-content-center p-5 my-5">
            <div className="mb-5 border p-5">
            <h1> Please Login</h1>
            <button className="my-5 px-5 btn btn-outline-danger " onClick={signInUsingGoogle}>Google SignIn</button>
            </div>
            {user.email &&

                <Redirect to={redirectedPath}/>

            }
           
        </div>
    );
}   

export default Login;