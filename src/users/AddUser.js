import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const {name,username,email}=user;
    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});

    };

    const tkn="Bearer "+localStorage.getItem("token");
    const head = {
        'Content-Type': 'application/json',
        'Authorization': tkn
      };
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8082/postuser", user,{headers:head});
        navigate("/home");
    };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
                <h2 className='text center m-3'>Add User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input 
                       type={"name"}
                       className='form-control'
                       placeholder='Enter your name'
                       name='name' 
                       value={name} 
                       onChange={(e)=>onInputChange(e)} />
                       

                </div>
                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Username</label>
                    <input 
                       type={"username"}
                       className='form-control'
                       placeholder='Enter your Username'
                       name='username' 
                       value={username}
                       onChange={(e)=>onInputChange(e)} />

                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Email</label>
                    <input 
                       type={"email"}
                       className='form-control'
                       placeholder='Enter your Email Address'
                       name='email' 
                       value={email}
                       onChange={(e)=>onInputChange(e)} />
                </div>
                <Link type='Submit' className='btn btn-outline-primary back-to-home' onClick={e=> onSubmit(e)} >Submit</Link>
                <Link  className='btn btn-outline-danger back-to-home mx-2' to='/home'>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
