import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link } from 'react-router-dom';
const Navbar = () => {
  return (
  
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link  className="nav-link active" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
        </li>
        
    </ul>
    </div>
  </div>
</nav>
    </div>
   
  )
}



export default Navbar