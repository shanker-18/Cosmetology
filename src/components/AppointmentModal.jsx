import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AppointmentModal = ({ isOpen, onClose, selectedService }) => {
  const [service, setService] = useState('Hair Care');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (selectedService) {
      setService(selectedService === 'Skin Treatment' ? 'Skin Care' : selectedService);
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name}! Your appointment request for ${service} has been received. Our team will call you at ${phone} shortly.`);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          <X size={24} />
        </span>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--dark-charcoal)' }}>
          Get Appointment
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Schedule your consultation with La Fuse Cosmetology specialists.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              className="form-control"
              placeholder="+91 Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Select Service</label>
            <select
              className="form-control"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="Hair Care">Hair Care</option>
              <option value="Skin Care">Skin Care</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Laser Hair Removal">Laser Hair Removal</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            CONFIRM APPOINTMENT REQUEST
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
