import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Corrected import path

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><NavLink to="/" className='navbar-item'>Home</NavLink></li>
        <li><NavLink to="/about" className='navbar-item'>About Me</NavLink></li>
        <li><NavLink to="/projects-experience" className='navbar-item'>Projects</NavLink></li>
        <li><NavLink to="/contact" className='navbar-item'>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
