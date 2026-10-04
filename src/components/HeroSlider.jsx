import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const slidesData = [
  {
    badge: '✨ Safe & Advanced Dermatology Care',
    titleLine1: 'Natural & Safe Methods',
    titleSpan: 'For Skin Treatment',
    subtitle: 'Rejuvenate your skin with non-invasive, result-oriented clinical treatments designed for long-lasting health & radiance.',
    bgImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80',
    primaryBtn: 'GET APPOINTMENT',
    secondaryBtn: 'ABOUT US',
    secondaryHref: '#about',
  },
  {
    badge: '🌿 Hair Regrowth & Restoration',
    titleLine1: 'Revolutionary Hair Care',
    titleSpan: '& PRP Solutions',
    subtitle: 'Combat hair loss and scalp issues with state-of-the-art hair growth therapies, PRP treatments, and expert trichology care.',
    bgImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80',
    primaryBtn: 'GET APPOINTMENT',
    secondaryBtn: 'SPECIALIZATION',
    secondaryHref: '#specialization',
  },
  {
    badge: '⚡ Non-Surgical Body Sculpting',
    titleLine1: 'Advanced Weight Loss',
    titleSpan: '& Inch Loss Care',
    subtitle: 'Achieve your desired contour with medically approved body firming, double chin reduction, and figure correction.',
    bgImage: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1600&q=80',
    primaryBtn: 'GET APPOINTMENT',
    secondaryBtn: 'CONTACT US',
    secondaryHref: '#contact',
  },
];

const HeroSlider = ({ onOpenModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slidesData.map((slide, idx) => (
          <div
            key={idx}
            className={`slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          >
            <div className="slide-overlay"></div>
            <div className="container">
              <div className="hero-content">
                <div className="hero-badge">{slide.badge}</div>
                <h1 className="hero-title">
                  {slide.titleLine1} <br />
                  <span>{slide.titleSpan}</span>
                </h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-buttons">
                  <button onClick={() => onOpenModal()} className="btn btn-primary">
                    {slide.primaryBtn}
                  </button>
                  <a
                    href={slide.secondaryHref}
                    className="btn btn-outline"
                    style={{ color: '#fff', borderColor: '#fff' }}
                  >
                    {slide.secondaryBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button className="slider-arrow" onClick={prevSlide} aria-label="Previous Slide">
          <ArrowLeft size={20} />
        </button>
        <button className="slider-arrow" onClick={nextSlide} aria-label="Next Slide">
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="slider-dots">
        {slidesData.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
