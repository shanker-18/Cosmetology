import React from 'react';
import aboutImg from '../assets/about-clinic.png';
import receptionImg from '../assets/clinic-reception.png';
import { Check } from 'lucide-react';

const AboutUs = ({ onOpenModal }) => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box">
            <div className="clinic-gallery-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '2px solid rgba(232, 117, 0, 0.2)' }}>
                <img
                  src={aboutImg}
                  alt="La Fuse Cosmetology Clinic Clinical Setup & Treatment Banners"
                  className="about-main-img"
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(232, 117, 0, 0.2)', boxShadow: 'var(--shadow-sm)' }}>
                  <img
                    src={receptionImg}
                    alt="La Fuse Consultation Desk & Logo Wall"
                    style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg, #2D3748 0%, #1A202C 100%)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    border: '1px solid rgba(232, 117, 0, 0.3)'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#FFB366', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Authentic Clinical Facility
                  </span>
                  <p style={{ fontSize: '0.85rem', color: '#E2E8F0', marginTop: '0.3rem', margin: 0, fontWeight: 500 }}>
                    📍 105, Elumalai St, West Tambaram, Chennai
                  </p>
                </div>
              </div>
            </div>
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

        {/* VISION & MISSION CARDS */}
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
