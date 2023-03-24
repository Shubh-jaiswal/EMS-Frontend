import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        username:"",
        password:""
    });

    const {username,password}=user;
    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});

    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8082/login", user)
        .then((res)=>{
            if(res!=null){
            localStorage.setItem("token",res.data);
        }
        });  
        window.location.replace("/home");
        
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
                <h2 className='text center m-3'>Login</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Username</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Username'
                       name='username' 
                       value={username} 
                       onChange={(e)=>onInputChange(e)} required></input>
                       

                </div>
                <div className='mb-3'>
                    <label htmlFor='Password' className='form-label'>Password</label>
                    <input 
                       type={"password"}
                       className='form-control'
                       placeholder='Password'
                       name='password' 
                       value={password}
                       onChange={(e)=>onInputChange(e)} required></input>

                </div>
                <p>Not a user? <a href='/'> Register Here</a></p>
                <button type='Submit' className='btn btn-outline-primary' >Submit</button>
 
                </form>
            </div>
        </div>
    </div>
  )
}




//Important Code for form submit on login
// const onSubmit=async (e)=>{
//     e.preventDefault();
//     await axios.post("http://localhost:8082/login", user)
//     .then((res)=>{
//         if(res!=null){
//         localStorage.setItem("token",res.data);
//     }
//     });  
//     window.location.replace("/home");
    