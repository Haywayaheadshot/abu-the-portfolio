import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GoEyeClosed } from 'react-icons/go';
import '../../styles/service.css';

function Service({ service, closeModal }) {
  return (
    <div className="service-container" key={service.id}>
      <nav>
        <GoEyeClosed
          onClick={closeModal}
        />
      </nav>
      <h1>{service.name}</h1>
      <p>
        Services with more than 1 year+ hands-on Experience in building
        and designing innovative software solution
      </p>
      <section>
        {service.offers.map((offer) => (
          <div key={offer.id}>
            <span>
              <IoMdCheckmarkCircleOutline />
            </span>
            <p>
              {offer}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Service;

Service.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
