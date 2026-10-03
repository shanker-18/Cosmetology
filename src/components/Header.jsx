import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Header = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'specialization', 'success-stories', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT US', href: '#about', id: 'about' },
    { label: 'SPECIALIZATION', href: '#specialization', id: 'specialization' },
    { label: 'SUCCESS STORIES', href: '#success-stories', id: 'success-stories' },
    { label: 'CONTACT US', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="header">
      <div className="container nav-container">
        <a href="#home" className="logo-link">
          <img src={logoImg} alt="La Fuse Cosmetology Clinic" className="logo-img" />
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button onClick={() => onOpenModal()} className="btn btn-primary">
            GET APPOINTMENT
          </button>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} color="#1F2428" /> : <Menu size={26} color="#1F2428" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
