import React from 'react';
import logoImg from '../assets/logo.png';
import flowerWatermark from '../assets/flower-watermark.png';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* EXACT GIVEN FLOWER WATERMARK IMAGE - SCALED DOWN ELEGANTLY */}
      <img
        src={flowerWatermark}
        alt="La Fuse Flower Accent"
        className="footer-watermark-img"
      />

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
                <a
                  href="https://www.google.com/maps/dir//LA+FUSE+Cosmetology+Clinic,+105,+Elumalai+St,+West+Tambaram,+Tambaram,+Tamil+Nadu+600045/@9.1717632,77.8698752,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525fb0729be213:0x7d9285f387451a1d!2m2!1d80.1125573!2d12.9258218?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--primary-orange)', fontWeight: 600 }}
                >
                  West Tambaram, Chennai &rarr;
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
