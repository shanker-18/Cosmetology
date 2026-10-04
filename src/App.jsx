import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import Specialization from './components/Specialization';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import AppointmentModal from './components/AppointmentModal';
import CancelModal from './components/CancelModal';
import { cancelAppointmentById } from './utils/appointmentService';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Hair Care');

  // Cancel Modal state
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [cancelResult, setCancelResult] = useState(null);

  useEffect(() => {
    // Check URL parameters for cancellation action: ?action=cancel&id=xxxx
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');
    const appointmentId = urlParams.get('id');

    if (action === 'cancel' && appointmentId) {
      setIsCancelModalOpen(true);
      setCancelLoading(true);

      cancelAppointmentById(appointmentId).then((res) => {
        setCancelLoading(false);
        setCancelResult(res);
        // Clean URL query parameters without reloading
        window.history.replaceState({}, document.title, window.location.pathname);
      });
    }
  }, []);

  const handleOpenModal = (serviceName = 'Hair Care') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseCancelModal = () => {
    setIsCancelModalOpen(false);
    setCancelResult(null);
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
      <CancelModal
        isOpen={isCancelModalOpen}
        onClose={handleCloseCancelModal}
        loading={cancelLoading}
        result={cancelResult}
      />
    </div>
  );
}

export default App;
