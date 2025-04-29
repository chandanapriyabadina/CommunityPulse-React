import React from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="logo">COMMUNITY PULSE</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Contact">Feedback</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Crud"></Link></li>
          <li><Link to="/Ser"></Link></li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Navbar;