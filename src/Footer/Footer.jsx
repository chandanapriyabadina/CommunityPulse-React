import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-section">
          <h3 className="footer-logo">LOGO</h3>
          <ul>
            <li>Start</li>
            <li>Documentation</li>
            <li>Installation</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li>Contact</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h3>LEGAL</h3>
          <ul>
            <li>Privacy Notice</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Support Center</li>
            <li>Service Status</li>
            <li>Security</li>
            <li>Blog</li>
            <li>Customers</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* Let's Chat Section */}
        <div className="footer-section">
          <h3>LET'S CHAT</h3>
          <p>Have a support question?</p>
          <p>YOU CALL US</p>
          <p>0124-64XXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
