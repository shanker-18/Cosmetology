import React from 'react';
import { Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-bar-info">
          <div className="top-bar-item">
            <Phone size={15} color="#E87500" />
            <a href="tel:+918939100700">+91 89391 00700</a>
          </div>
          <div className="top-bar-item">
            <Mail size={15} color="#E87500" />
            <a href="mailto:lafusecosmetologyclinic@gmail.com">lafusecosmetologyclinic@gmail.com</a>
          </div>
        </div>
        <div className="top-bar-hours">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={15} color="#E87500" />
            <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
          </div>
          <div className="social-bar-links">
            <a
              href="https://www.instagram.com/lafuse_cosmetology_clinic/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://www.facebook.com/LafuseCosmetologyClinic/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
