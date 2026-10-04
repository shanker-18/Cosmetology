import React from 'react';
import { X, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const AppointmentModal = ({ isOpen, onClose, selectedService }) => {
  if (!isOpen) return null;

  const googleCalendarUrl = "https://calendar.app.google/97VTcbGRsPCPVGMH8?ctz=Asia/Kolkata";

  return (
    <div className="modal active" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '650px',
          width: '92%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.75rem',
          borderRadius: 'var(--radius-lg)',
          overflowY: 'auto'
        }}
      >
        <span className="modal-close" onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', cursor: 'pointer', zIndex: 10 }}>
          <X size={24} />
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
          <Calendar size={26} color="var(--primary-orange)" />
          <h3 style={{ fontSize: '1.6rem', color: 'var(--dark-charcoal)', margin: 0 }}>
            Book Consultation
          </h3>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          Select your preferred date & time slot directly on our official Google Calendar.
          {selectedService && <strong> Specialization: {selectedService}</strong>}
        </p>

        {/* GOOGLE CALENDAR DIRECT BOOKING CARD */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FFF4EB 0%, #FFFFFF 100%)',
            border: '2px solid rgba(232, 117, 0, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(232, 117, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}
          >
            <Calendar size={30} color="var(--primary-orange)" />
          </div>

          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--dark-charcoal)' }}>
            La Fuse Google Calendar Appointment Scheduler
          </h4>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '440px', marginBottom: '1.25rem' }}>
            Instant appointment confirmation & calendar invites will be sent directly to your email address and our clinic team.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', maxWidth: '360px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#2D3748', justifyContent: 'center' }}>
              <CheckCircle size={16} color="#38A169" />
              <span>Real-time Available Time Slots</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#2D3748', justifyContent: 'center' }}>
              <CheckCircle size={16} color="#38A169" />
              <span>Instant Patient & Clinic Email Alerts</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#2D3748', justifyContent: 'center' }}>
              <CheckCircle size={16} color="#38A169" />
              <span>100% Free & Secure Booking</span>
            </div>
          </div>

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              width: '100%',
              maxWidth: '360px',
              fontSize: '1rem',
              padding: '0.9rem 1.5rem',
              boxShadow: '0 6px 20px rgba(232, 117, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            📅 OPEN GOOGLE CALENDAR BOOKING <ExternalLink size={16} />
          </a>
        </div>

        {/* EMBEDDED IFRAME FOR IN-MODAL CALENDAR VIEW */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)', height: '340px' }}>
          <iframe
            title="La Fuse Google Calendar Appointment Scheduler"
            src={googleCalendarUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
