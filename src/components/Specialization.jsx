import React from 'react';

const specsData = [
  {
    title: 'Hair Care',
    desc: 'PRP, Regrowth & Scalp Treatments',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    service: 'Hair Care',
  },
  {
    title: 'Skin Care',
    desc: 'Acne, Pigmentation & Medi-Facials',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80',
    service: 'Skin Care',
  },
  {
    title: 'Weight Loss',
    desc: 'Inch Loss & Body Sculpting',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    service: 'Weight Loss',
  },
  {
    title: 'Laser Hair Removal',
    desc: 'Smooth, Precision Laser Care',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=600&q=80',
    service: 'Laser Hair Removal',
  },
];

const Specialization = ({ onOpenModal }) => {
  return (
    <section id="specialization" className="section-padding bg-warm">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">CARE CATEGORIES</span>
          <h2 className="section-title">our Specialization</h2>
          <p className="section-desc">Explore our targeted clinical solutions across our core aesthetic specializations.</p>
        </div>

        <div className="specialization-grid">
          {specsData.map((spec, idx) => (
            <div
              key={idx}
              className="spec-card"
              onClick={() => onOpenModal(spec.service)}
            >
              <div className="spec-img-wrapper">
                <img src={spec.image} alt={spec.title} />
              </div>
              <div className="spec-body">
                <h3 className="spec-title">{spec.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{spec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialization;
