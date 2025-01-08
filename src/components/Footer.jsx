import React from 'react';
import logo from '../assets/images/logo.png';
import { FaInstagram, FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Importing the icons

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <img src={logo} alt="Company Logo" className="footer2" />
        <p className="footer3">© 2025 Your Company. All Rights Reserved.</p>

        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
