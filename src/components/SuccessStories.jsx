import React from 'react';

const storiesData = [
  {
    category: 'SKIN PIGMENTATION & GLOW',
    beforeImg: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
    patient: 'Acne Scar & Tone Rejuvenation',
    treatmentTag: 'Skin Lightening & Medi-Facial Series',
    desc: 'Clearer texture and even tone achieved over 4 customized treatment sessions. (Sample visual placeholder for client replacement).',
  },
  {
    category: 'HAIR DENSITY RESTORATION',
    beforeImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80',
    patient: 'PRP Hair Regrowth',
    treatmentTag: 'PRP Therapy & Hair Growth Boost',
    desc: 'Significant increase in hair density and root strength observed post-PRP therapy. (Sample visual placeholder for client replacement).',
  },
  {
    category: 'INCH LOSS & CONTOURING',
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80',
    patient: 'Body Sculpting & Firming',
    treatmentTag: 'Inch Loss & Figure Correction',
    desc: 'Targeted waistline contouring achieved with non-invasive slimming procedures. (Sample visual placeholder for client replacement).',
  },
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="section-padding">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">REAL RESULTS</span>
          <h2 className="section-title">Success Stories</h2>
          <p className="section-desc">Sample before & after clinical progress visual cards for client review.</p>
          <br />
          <div className="reviews-badge-bar">
            <span className="google-logo">Google Reviews</span>
            <div className="stars">★★★★★</div>
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--dark-charcoal)' }}>
              4.9 / 5.0 Rating
            </span>
          </div>
        </div>

        <div className="stories-grid">
          {storiesData.map((story, idx) => (
            <div key={idx} className="story-card">
              <div className="story-header">{story.category}</div>
              <div className="ba-images-wrap">
                <div className="ba-img-box">
                  <img src={story.beforeImg} alt="Before Treatment" />
                  <span className="ba-tag">BEFORE</span>
                </div>
                <div className="ba-img-box">
                  <img src={story.afterImg} alt="After Treatment" />
                  <span className="ba-tag" style={{ background: 'var(--primary-orange)' }}>
                    AFTER
                  </span>
                </div>
              </div>
              <div className="story-body">
                <div className="story-patient">{story.patient}</div>
                <div className="story-treatment-tag">{story.treatmentTag}</div>
                <p className="story-desc">{story.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
