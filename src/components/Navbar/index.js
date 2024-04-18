// This component is the Navbar of the website. It contains the links to the different pages of the website.
// The Navbar component is consistent across all pages of the website.

import React from "react";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Mobile menu icon
import { FaScissors } from "react-icons/fa6"; // Brand icon
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav">
      <div className={`nav-menu ${!isOpen ? 'hidden' : ''}` }>
      <FaScissors className="brand-icon" />
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/features">
          Features
        </Link>
        <Link className="nav-link" to="/pricing">
          Pricing
        </Link>
        <Link className="nav-link" to="/resources">
          Resources
        </Link>
      </div>
      <div className={`mobile-icon ${isOpen ? 'open' : ''}`}>
        {isOpen ? <span><FaScissors onClick={handleClick} /></span> : <span><FaBars onClick={handleClick} /></span> }
      </div>
    </nav>
  );
};

export default Navbar;
