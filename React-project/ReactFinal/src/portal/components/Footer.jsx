import React from 'react'
import {  NavLink } from 'react-router-dom';
import './Style.css';

 const Footar = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a leading company in providing the best solutions for your needs.
            Our mission is to deliver quality and excellence in every aspect.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: mdshaheen60101@gmail.com</p>
          <p>Phone: +8801641160101</p>
          <p>Address: Dhanmondi Dhaka , Bangladesh</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Service">Service</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="src/components/images/facebook.webp" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="src/components/images/Twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="src/components/images/instagram.avif" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footar;