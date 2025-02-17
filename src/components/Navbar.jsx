import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Regular Navbar for desktop */}
      <ul className="navbar-list">
        <li><NavLink to="/" className='navbar-item'>Home</NavLink></li>
        <li><NavLink to="/about" className='navbar-item'>About Me</NavLink></li>
        <li><NavLink to="/projects-experience" className='navbar-item'>Projects</NavLink></li>
        <li><NavLink to="/contact" className='navbar-item'>Contact</NavLink></li>
      </ul>

      {/* Mobile Navbar */}
      <ul className="navbar-list-mobile">
        <li><NavLink to="/" className='navbar-item' onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to="/about" className='navbar-item' onClick={toggleMenu}>About Me</NavLink></li>
        <li><NavLink to="/projects-experience" className='navbar-item' onClick={toggleMenu}>Projects</NavLink></li>
        <li><NavLink to="/contact" className='navbar-item' onClick={toggleMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
