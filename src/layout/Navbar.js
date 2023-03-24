import React from 'react'
import { Else, If, Then } from 'react-if';
import { Link, Navigate } from 'react-router-dom'

export default function Navbar() {

  const onlogout = () => {
    localStorage.removeItem("token");
    window.location.href("/login");
  };

  const isLoggedIn = "false";
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-1">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Employee Managment System</Link>
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='d-flex'>

            <If condition={localStorage.getItem("token")!=null}>
              <Then>
               
                <Link className="btn btn-outline-light m-1" to="/adduser">Add User</Link>
                <Link className="btn btn-outline-light m-1" to='/login' onClick={() => onlogout()}>Log out</Link>
              </Then>
             
              <Else>
                <Link className="btn btn-outline-light m-1" to="/login">Login</Link>
                
              </Else>
            </If>
            

          </div>
        </div>
      </nav>


    </div>
  )
}
 /*  {<Link className="btn btn-outline-light m-1" to="/login">Login</Link>} */