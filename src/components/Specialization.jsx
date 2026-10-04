import React from 'react';
import flowerIcon from '../assets/flower-icon.png';

const specsData = [
  {
    title: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    service: 'Hair Care',
    servicesList: [
      'Hair Regrowth Treatment (PRP)',
      'Oxygen Laser Therapy for Dandruff',
      'GFC for Hair Regrowth',
      'Mesotherapy / Serum Infusion',
      'Hair Transplant (Before & After)',
    ],
  },
  {
    title: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80',
    service: 'Skin Care',
    servicesList: [
      'Full Body Skin Whitening',
      'Hydra Facial',
      'Photo Facial',
      'Cosmelan Peel',
      'Carbon Laser for Skin Pigmentation',
      'Scar Reduction',
      'Stretch Mark Reduction',
      'Warts Removal',
      'Dark Lips Laser Treatment',
      'Laser Hair Reduction',
      'Botox',
      'Filler',
      'Melasma Treatment',
      'Vampire Facial (PRP)',
      'Thread Lift',
      'Plasma Lift',
      'Micro blading - Eye Brows',
      'Micro Pigmentation',
      'Lip Coloring',
      'Skin Rejuvenation',
      'Depigmentation',
      'Face Lifting',
      'Tattoo Removal',
    ],
  },
  {
    title: 'Slimming',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    service: 'Slimming',
    servicesList: [
      'Weightloss & Body Shaping',
      'Cool Sculpting',
      'Lipolaser',
    ],
  },
  {
    title: 'Laser Hair Removal',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=600&q=80',
    service: 'Laser Hair Removal',
    description:
      'Laser hair removal is a medical procedure that uses a concentrated beam of light (laser) to remove unwanted hair. During laser hair removal, a laser emits a light that is absorbed by the pigment (melanin) in the hair. The light energy is converted to heat, which damages the tube-shaped sacs within the skin (hair follicles) that produce hairs. This damage inhibits or delays future hair growth.',
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
            <div key={idx} className="spec-card">
              <div className="spec-img-wrapper">
                <img src={spec.image} alt={spec.title} />
              </div>
              <div className="spec-body">
                <h3 className="spec-title">{spec.title}</h3>

                {spec.servicesList ? (
                  <ul className="services-sub-list">
                    {spec.servicesList.map((item, itemIdx) => (
                      <li key={itemIdx} className="service-sub-item">
                        <img src={flowerIcon} alt="Bullet" className="flower-bullet-img" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: '0.75rem 0 1.5rem', lineHeight: '1.6' }}>
                    {spec.description}
                  </p>
                )}

                <button
                  onClick={() => onOpenModal(spec.service)}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  BOOK {spec.title.toUpperCase()}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialization;
