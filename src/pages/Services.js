import React from 'react';
import { useSelector } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import '../styles/services.css';

const Services = () => {
  const services = useSelector((state) => state.services);

  const getIconComponent = (iconName) => {
    const IconComponent = FaIcons[iconName] || SiIcons[iconName];
    return IconComponent;
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
              <button type="button">
                View more ↗️
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Services;
