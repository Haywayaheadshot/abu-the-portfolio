import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import Service from '../components/dep/Service';
import '../styles/services.css';

const Services = () => {
  const services = useSelector((state) => state.services);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const getIconComponent = (iconName) => {
    const IconComponent = FaIcons[iconName] || SiIcons[iconName];
    return IconComponent;
  };

  const handleShowDetails = (service) => {
    setSelectedService(service);
    setShowModal(true);
    // body.classList.add('open');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // body.classList.remove('open');
  };

  return (
    <div className="services-container">
      <section>
        <h1>Services</h1>
        <h4>What I offer</h4>
      </section>
      <section className="mapped-services">
        {services.map((service) => {
          const IconComponent = getIconComponent(service.icon);
          return (
            <div key={service.id} className="service-div">
              {IconComponent && <IconComponent size={40} />}
              <h3>{service.name}</h3>
              <button type="button" onClick={() => handleShowDetails(service)}>
                View more ↗️
              </button>
            </div>
          );
        })}
      </section>
      { showModal && (
        <div className="">
          <div className="">
            <Service service={selectedService} closeModal={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
