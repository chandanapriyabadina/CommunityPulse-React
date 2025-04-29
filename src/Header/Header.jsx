import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
  
    <header className="header">
      <h1 className="logo">COMMUNITY PULSE</h1>
      <nav className="nav">
        <ul className="nav-list">
        <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
         
        </ul>
      </nav>
    </header>
  
  );
};

export default Header;
