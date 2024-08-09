// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
        <a href="/contact">Contact Information</a>
      </div>
      <div className="footer-social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="social-icon" />
        </a>
        {/* Add more social media icons as needed */}
      </div>
    </footer>
  );
}

export default Footer;
