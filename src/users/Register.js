import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser () {

    let navigate=useNavigate()

    // useEffect(() => {
    //     onRefresh();
    // });

    

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
        await axios.post("http://localhost:8082/register", user);
        navigate("/login");
    };

    const onRefresh=async (e)=>{
        if(localStorage.getItem("token") !=null){
        await axios.get(`http://localhost:8082/validation/${localStorage.getItem("token")}`)
        .then(res=>{
            console.log(res.data);
            if(res.data===true){
                navigate("/home");
            }else{
                navigate("/");
            }
        });
    }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
                <h2 className='text center m-3'>Register Admin</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                {/* <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Enter your name'
                       name='name' 
                       value={name} 
                       onChange={(e)=>onInputChange(e)}></input>
                       

                </div> */}
                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Username</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Enter your Username'
                       name='username' 
                       value={username}
                       onChange={(e)=>onInputChange(e)}></input>

                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input 
                       type={"password"}
                       className='form-control'
                       placeholder='Enter password'
                       name='password' 
                       value={password}
                       onChange={(e)=>onInputChange(e)}></input>
                </div>
 
                <p>Already a user? <a href='/login'> Login Here</a></p>


                <button type='Submit' className='btn btn-outline-primary' >Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>


                </form>
            </div>
        </div>
    </div>
  )
}
