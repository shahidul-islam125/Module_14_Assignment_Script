import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './RegisterForm.css'

const RegisterForm = () => {
    const [data, setData] = useState({});

    const collectData = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
       console.log(data);

    }

    return (
        <section className='register-section'>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <input className ="form-control p-3" onBlur= {collectData} type='text' name='name' placeholder='Enter Your Name' required/> <br/>

                <input className ="form-control p-3" onBlur= {collectData} type='email' name='email' placeholder='Enter Your Email' required/> <br/>

                <input className ="form-control p-3"  onBlur= {collectData} type='password' name='password' placeholder='Enter Your Password' required/><br/>

                <input className ="form-control p-3"  onBlur= {collectData} type='tel' name='phone' placeholder='Enter Your Phone Number' required/><br/>

                <input className='btn btn-success w-100 p-3' type='submit' name='submit' value="Submit"/>
            </form>
            <p className="mt-2">Already have an account? <span> <Link to ="/login">Login Now</Link></span></p>
            
        </section>
    );
};

export default RegisterForm;