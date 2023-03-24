import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const {id}=useParams();
     
    useEffect(()=>{
        loadUser();
    },[]);

    const tkn="Bearer "+localStorage.getItem("token");
    const head = {
        'Content-Type': 'application/json',
        'Authorization': tkn
      }
    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8082/getuser/${id}`,{headers:head});
        setUser(result.data);
    };
  return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
                    <h2 className='text center mb-4'>User Details</h2>
                    <div className='card p-3'>
                        <div className='class-reader'>
                            <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                            <span className='text-primary'>*Details of user id : {user.id}</span>
                                </li>
                                <li className='list-group-item'>
                                    <b>Name: </b>
                                    {user.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Username: </b>
                                    {user.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email: </b>
                                    {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-dark my-4 back-to-home' to={"/home"}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
