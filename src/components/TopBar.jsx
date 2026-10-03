import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

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
            <a href="mailto:cosmetologyclinic@iblhealthcare.com">cosmetologyclinic@iblhealthcare.com</a>
          </div>
        </div>
        <div className="top-bar-hours">
          <Clock size={15} color="#E87500" />
          <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
