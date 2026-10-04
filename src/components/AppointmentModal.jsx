import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';

const timeSlots = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '05:00 PM - 06:00 PM',
  '06:00 PM - 07:00 PM',
  '07:00 PM - 08:00 PM',
];

const AppointmentModal = ({ isOpen, onClose, selectedService }) => {
  const [service, setService] = useState('Hair Care');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:00 AM - 11:00 AM');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService === 'Skin Treatment' ? 'Skin Care' : selectedService);
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setSelectedTime('10:00 AM - 11:00 AM');
    onClose();
  };

  return (
    <div className="modal active" onClick={handleReset}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '560px',
          width: '92%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          position: 'relative'
        }}
      >
        <span
          className="modal-close"
          onClick={handleReset}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', cursor: 'pointer', zIndex: 10 }}
        >
          <X size={24} />
        </span>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(56, 161, 105, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}
            >
              <CheckCircle size={36} color="#38A169" />
            </div>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--dark-charcoal)', marginBottom: '0.5rem' }}>
              Appointment Requested!
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Thank you <strong>{name}</strong>! Your consultation for <strong>{service}</strong> on{' '}
              <strong>{date || 'your chosen date'}</strong> ({selectedTime}) has been received by La Fuse Cosmetology Clinic. Our representative will call you at <strong>{phone}</strong> to confirm your visit.
            </p>
            <button onClick={handleReset} className="btn btn-primary" style={{ width: '100%' }}>
              DONE
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <Calendar size={24} color="var(--primary-orange)" />
              <h3 style={{ fontSize: '1.5rem', color: 'var(--dark-charcoal)', margin: 0 }}>
                Book Consultation
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Schedule your confidential aesthetic consultation at La Fuse Cosmetology Clinic.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91 Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Select Treatment</label>
                <select
                  className="form-control"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="Hair Care">Hair Care & PRP</option>
                  <option value="Skin Care">Skin Care & Aesthetics</option>
                  <option value="Slimming">Slimming & Body Shaping</option>
                  <option value="Laser Hair Removal">Laser Hair Removal</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} color="var(--primary-orange)" /> Time Slot *
                  </label>
                  <select
                    className="form-control"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.25rem' }}>
                CONFIRM APPOINTMENT
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
