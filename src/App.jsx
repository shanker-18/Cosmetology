import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import Specialization from './components/Specialization';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import AppointmentModal from './components/AppointmentModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Hair Care');

  const handleOpenModal = (serviceName = 'Hair Care') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-root">
      <TopBar />
      <Header onOpenModal={handleOpenModal} />
      <HeroSlider onOpenModal={handleOpenModal} />
      <AboutUs onOpenModal={handleOpenModal} />
      <Specialization onOpenModal={handleOpenModal} />
      <ContactUs />
      <Footer />
      <MobileStickyBar onOpenModal={handleOpenModal} />
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;
