import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams,useNavigate } from 'react-router-dom';
import { Else } from 'react-if';

export default function Home() {

    const { id } = useParams();

    let navigate=useNavigate()


    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers();
        console.log(localStorage.getItem("token"));
    }, []);

    const tkn="Bearer "+localStorage.getItem("token");
    const head = {
        'Content-Type': 'application/json',
        'Authorization': tkn
      }

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8082/getusers",{headers:head});
        setUsers(result.data);
        
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8082/deleteuser/${id}`,{headers:head});
        loadUsers();
    };

    

    if(localStorage.getItem("token")!=null){
    return (
        <div className='container'>
            <div className='py-4'>
            <h2 className='display-6 pb-4'>Employee List</h2>
                <table className="table table-striped shadow">

                    <thead className='text-light bg-dark'>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                            {/* <th scope="col">Buttons</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>    
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className='fa fa-eye text-success back-to-home mx-2' to={`/viewuser/${user.id}`}></Link> |
                                        <Link className='fa fa-pen text-primary back-to-home mx-2' to={`/edituser/${user.id}`}></Link> |
                                        <a className='fa fa-trash text-danger back-to-home mx-2' onClick={() => deleteUser(user.id)}></a>
                                    </td>
                                
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
}
