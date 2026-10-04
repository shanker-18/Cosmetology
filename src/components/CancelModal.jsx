import React from 'react';
import { XCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const CancelModal = ({ isOpen, onClose, loading, result }) => {
  if (!isOpen) return null;

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', textAlign: 'center' }}>
        {loading ? (
          <div style={{ padding: '2rem 1rem' }}>
            <div style={{ fontSize: '1.2rem', color: 'var(--primary-orange)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Processing Cancellation...
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Unblocking time slot and updating database...
            </p>
          </div>
        ) : result && result.success ? (
          <div style={{ padding: '1.5rem 0' }}>
            <CheckCircle size={60} color="#E87500" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--dark-charcoal)' }}>
              Appointment Cancelled
            </h3>
            <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.5 }}>
              The appointment for <strong>{result.appointment?.name}</strong> on <strong>{result.appointment?.appointment_date}</strong> at <strong>{result.appointment?.appointment_time}</strong> has been cancelled.
            </p>
            <div style={{ background: '#FFF4EB', border: '1px solid var(--primary-orange)', padding: '0.85rem', borderRadius: '8px', color: 'var(--primary-hover)', fontSize: '0.88rem', marginBottom: '1.5rem', fontWeight: 600 }}>
              ✨ Time slot <strong>{result.appointment?.appointment_time}</strong> is now unblocked and available for booking again!
            </div>
            <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
              CLOSE
            </button>
          </div>
        ) : (
          <div style={{ padding: '1.5rem 0' }}>
            <XCircle size={60} color="#E53E3E" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--dark-charcoal)' }}>
              Cancellation Notice
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {result?.error || 'Unable to process cancellation request. The appointment may have already been cancelled.'}
            </p>
            <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CancelModal;
