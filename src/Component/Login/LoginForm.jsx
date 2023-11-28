import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './LoginForm.css'
const LoginForm = () => {
    const [loginData, setLoginData] = useState({})

    const collectData = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }
    const formHandler = (e) => {
        e.preventDefault()
        console.log(loginData)
    }
    return (
        <section className='login-form-section'>
            <h3>Login</h3>
            <form onSubmit={formHandler}>
                <input className ="form-control p-3" onBlur= {collectData} type='email' name='email' placeholder='Enter Your Email' required/> <br/>

                <input className ="form-control p-3"  onBlur= {collectData} type='password' name='password' placeholder='Enter Your Password' required/><br/>

                <input className='btn btn-success w-100 p-3' type='submit' name='submit' value="Login"/>
            </form>
            <p className='mt-2'>Are you need? <span><Link to="/register">Register Now</Link></span></p>
        </section>
    );
};

export default LoginForm;