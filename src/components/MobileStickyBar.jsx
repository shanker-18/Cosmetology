import React from 'react';

const MobileStickyBar = ({ onOpenModal }) => {
  return (
    <div className="mobile-sticky-bar">
      <a
        href="tel:+918939100700"
        className="btn btn-outline"
        style={{ borderColor: 'var(--dark-charcoal)', color: 'var(--dark-charcoal)' }}
      >
        📞 Call Now
      </a>
      <button onClick={() => onOpenModal()} className="btn btn-primary">
        📅 Book Visit
      </button>
    </div>
  );
};

export default MobileStickyBar;
