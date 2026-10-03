import React from 'react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-card">
              <img src={logoImg} alt="La Fuse Cosmetology Clinic Logo" className="footer-logo-img" />
            </div>
            <p>
              La Fuse Cosmetology Clinic delivers natural, safe, and result-driven Hair, Skin, and Slimming treatments powered by modern medical-aesthetic science.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#specialization">Specialization</a></li>
              <li><a href="#success-stories">Success Stories</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-links" style={{ fontSize: '0.9rem' }}>
              <li><strong>Phone:</strong> <a href="tel:+918939100700">+91 89391 00700</a></li>
              <li><strong>Email:</strong> <a href="mailto:cosmetologyclinic@iblhealthcare.com">cosmetologyclinic@iblhealthcare.com</a></li>
              <li><strong>Hours:</strong> Mon - Sat: 10am - 8pm</li>
              <li><strong>Address:</strong> Location will be updated after confirmation</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 La Fuse Cosmetology Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
