import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your enquiry has been received by La Fuse Cosmetology Clinic. Our representative will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: '',
      date: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding bg-warm">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info-card">
            <h3>Get In Touch</h3>
            <p style={{ color: '#CBD5E0', marginBottom: '2rem' }}>
              Have questions or want to schedule a confidential consultation? Reach out to our team today.
            </p>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <Phone size={20} color="#E87500" />
              </div>
              <div className="contact-detail-text">
                <label>PHONE NUMBER</label>
                <a href="tel:+918939100700">+91 89391 00700</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <Mail size={20} color="#E87500" />
              </div>
              <div className="contact-detail-text">
                <label>EMAIL ADDRESS</label>
                <a href="mailto:lafusecosmetologyclinic@gmail.com" style={{ color: '#FFFFFF', wordBreak: 'break-all', overflowWrap: 'anywhere' }}>lafusecosmetologyclinic@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <MapPin size={20} color="#E87500" />
              </div>
              <div className="contact-detail-text">
                <label>CLINIC LOCATION</label>
                <a
                  href="https://www.google.com/maps/dir//LA+FUSE+Cosmetology+Clinic,+105,+Elumalai+St,+West+Tambaram,+Tambaram,+Tamil+Nadu+600045/@9.1717632,77.8698752,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525fb0729be213:0x7d9285f387451a1d!2m2!1d80.1125573!2d12.9258218?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF', textDecoration: 'underline' }}
                >
                  105, Elumalai St, West Tambaram, Chennai &rarr;
                </a>
              </div>
            </div>

            {/* INTERACTIVE GOOGLE MAP EMBED WITH DIRECT DIRECTIONS LINK */}
            <div
              style={{
                marginTop: '1.5rem',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid rgba(232, 117, 0, 0.4)',
                background: '#1A202C'
              }}
            >
              <iframe
                title="La Fuse Cosmetology Clinic Location"
                src="https://maps.google.com/maps?q=12.9258218,80.1125573&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="190"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://www.google.com/maps/dir//LA+FUSE+Cosmetology+Clinic,+105,+Elumalai+St,+West+Tambaram,+Tambaram,+Tamil+Nadu+600045/@9.1717632,77.8698752,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525fb0729be213:0x7d9285f387451a1d!2m2!1d80.1125573!2d12.9258218?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: '#E87500',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'var(--transition)'
                }}
              >
                <MapPin size={18} />
                Get Directions on Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="contact-form-card">
            <h3>Book Consultation</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="treatment">Select Service *</label>
                  <select
                    id="treatment"
                    name="treatment"
                    className="form-control"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Choose Service --</option>
                    <option value="Hair Care">Hair Care</option>
                    <option value="Skin Care">Skin Care</option>
                    <option value="Slimming">Slimming / Weight Loss</option>
                    <option value="Laser Hair Removal">Laser Hair Removal</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message">Message / Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="form-control"
                    placeholder="Tell us about your concern..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                SUBMIT APPOINTMENT REQUEST
              </button>
              <a
                href="https://calendar.app.google/97VTcbGRsPCPVGMH8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  width: '100%',
                  marginTop: '0.75rem',
                  borderColor: 'var(--primary-orange)',
                  color: 'var(--primary-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontWeight: 600
                }}
              >
                📅 Book Directly on Google Calendar <ExternalLink size={14} />
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
