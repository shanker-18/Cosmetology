import React from 'react';
import logoImg from '../assets/logo.png';
import flowerIcon from '../assets/flower-icon.png';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* BACKGROUND FLOWER WATERMARK */}
      <img src={flowerIcon} alt="Watermark" className="footer-watermark" />

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-card">
              <img src={logoImg} alt="La Fuse Cosmetology Clinic Logo" className="footer-logo-img" />
            </div>
            <p>
              La Fuse Cosmetology Clinic delivers natural, safe, and result-driven Hair, Skin, and Slimming treatments powered by modern medical-aesthetic science.
            </p>
            <div className="footer-social-icons">
              <a
                href="https://www.instagram.com/lafuse_cosmetology_clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/LafuseCosmetologyClinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#specialization">Specialization</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-links" style={{ fontSize: '0.9rem' }}>
              <li><strong>Phone:</strong> <a href="tel:+918939100700">+91 89391 00700</a></li>
              <li><strong>Email:</strong> <a href="mailto:lafusecosmetologyclinic@gmail.com">lafusecosmetologyclinic@gmail.com</a></li>
              <li><strong>Hours:</strong> Mon - Sun: 10am - 8pm</li>
              <li>
                <strong>Location:</strong>{' '}
                <a href="https://share.google/bkHRyn5TRjyY2G38G" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>
                  Google Business Profile &rarr;
                </a>
              </li>
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
