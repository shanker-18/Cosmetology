import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { saveAppointmentAndNotify, fetchBookedSlots } from '../utils/appointmentService';

const timeSlots = [
  '10:00 AM - 10:45 AM',
  '10:45 AM - 11:30 AM',
  '11:30 AM - 12:15 PM',
  '12:15 PM - 01:00 PM',
  '01:00 PM - 01:45 PM',
  '01:45 PM - 02:30 PM',
  '02:30 PM - 03:15 PM',
  '03:15 PM - 04:00 PM',
  '04:00 PM - 04:45 PM',
  '04:45 PM - 05:30 PM',
  '05:30 PM - 06:15 PM',
  '06:15 PM - 07:00 PM',
  '07:00 PM - 07:45 PM',
];

const AppointmentModal = ({ isOpen, onClose, selectedService }) => {
  const [service, setService] = useState('Hair Care');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService === 'Skin Treatment' ? 'Skin Care' : selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    if (date) {
      fetchBookedSlots(date).then((slots) => setBookedSlots(slots));
    } else {
      setBookedSlots([]);
    }
  }, [date]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await saveAppointmentAndNotify({
      name,
      phone,
      email,
      treatment: service,
      date,
      time,
      message,
    });

    setLoading(false);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setTime('');
    setMessage('');
    setBookedSlots([]);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal active" onClick={handleResetAndClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <span className="modal-close" onClick={handleResetAndClose}>
          <X size={24} />
        </span>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle size={56} color="#E87500" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--dark-charcoal)' }}>
              Appointment Confirmed!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Thank you <strong>{name}</strong>! Your appointment is <strong>CONFIRMED</strong> for <strong>{date}</strong> at <strong>{time}</strong>. Confirmation emails have been sent to <strong>{email || 'your email'}</strong> and to <strong>La Fuse Cosmetology Clinic</strong>.
            </p>
            <button onClick={handleResetAndClose} className="btn btn-primary" style={{ width: '100%' }}>
              DONE
            </button>
          </div>
        ) : (
          <>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.3rem', color: 'var(--dark-charcoal)' }}>
              Get Appointment
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Schedule your consultation with La Fuse Cosmetology specialists.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '0.85rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <div className="form-group">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91 Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '0.85rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Select Service *</label>
                <select
                  className="form-control"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="Hair Care">Hair Care</option>
                  <option value="Skin Care">Skin Care</option>
                  <option value="Slimming">Slimming</option>
                  <option value="Laser Hair Removal">Laser Hair Removal</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <div className="form-group">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Preferred Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Preferred Time Slot *</label>
                  <select
                    className="form-control"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  >
                    <option value="">-- Select Time Slot --</option>
                    {timeSlots.map((slot, idx) => {
                      const isBooked = bookedSlots.includes(slot);
                      return (
                        <option key={idx} value={slot} disabled={isBooked}>
                          {slot} {isBooked ? '(Already Booked)' : ''}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Message / Concern</label>
                <textarea
                  rows={2}
                  className="form-control"
                  placeholder="Any specific query or note..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
                disabled={loading}
              >
                {loading ? 'SAVING APPOINTMENT...' : 'CONFIRM APPOINTMENT REQUEST'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
