import React from 'react';
import aboutImg from '../assets/about-clinic.png';
import { Check } from 'lucide-react';

const AboutUs = ({ onOpenModal }) => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box">
            <img
              src={aboutImg}
              alt="La Fuse Clinic Interior"
              className="about-main-img"
            />
          </div>
          <div className="about-text">
            <span className="section-subtitle">WELCOME TO LA FUSE</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Premium Cosmetology & Aesthetic Excellence
            </h2>
            <p className="lead">
              La Fuse Cosmetology Clinic is a dedicated aesthetic clinic specializing in comprehensive Hair, Skin, and Slimming treatments.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We blend modern medical-aesthetic technology with personalized patient care. Our aim is to deliver natural, safe, and effective results without compromising on safety or aesthetic integrity.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon"><Check size={16} /></div>
                <span>State-of-the-Art Tech</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Check size={16} /></div>
                <span>Personalized Care</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Check size={16} /></div>
                <span>Dermatologist Guided</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Check size={16} /></div>
                <span>Natural & Safe Methods</span>
              </div>
            </div>

            <button onClick={() => onOpenModal()} className="btn btn-primary">
              BOOK CONSULTATION
            </button>
          </div>
        </div>

        {/* VISION & MISSION CARDS (CLIENT SCREENSHOT REPLICA) */}
        <div className="vm-cards-grid">
          <div className="vm-card">
            <h3>Our Vision</h3>
            <p>
              To empower individuals to feel confident and beautiful in their own skin through innovative and effective skincare solutions.
            </p>
          </div>
          <div className="vm-card">
            <h3>Our Mission</h3>
            <p>
              To enhance aesthetic wellbeing through result-oriented treatment programs and provide a best-in-class treatment experience with state-of-the-art technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
