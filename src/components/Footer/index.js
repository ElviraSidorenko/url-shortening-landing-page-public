import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // React-icons library for social media icons
import { FaScissors } from "react-icons/fa6"; // Brand icon

// Desc: Footer component
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content-left">
        <FaScissors className="brand-icon" />
          <h1 className="footer-title">Trim</h1>
          
        </div>
        <div className="footer-content-right">
          <a href="https://facebook.com" target="blank">
            <FaFacebook className="icon-socials" />
          </a>
          <a href="https://twitter.com" target="blank">
            <FaTwitter className="icon-socials" />
          </a>
          <a href="https://instagram.com" target="blank">
            <FaInstagram  className="icon-socials" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
