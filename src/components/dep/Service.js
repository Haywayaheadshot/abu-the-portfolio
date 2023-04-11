import React from "react";
import PropTypes from "prop-types";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoEyeClosed } from "react-icons/go";
import { IconContext } from "react-icons";

import "../../styles/service.css";

function Service({ service, closeModal }) {
  return (
    <div className="service-mother-container">
      <div
        className="service-container"
        key={service.id}
        id="service-container"
      >
        <nav>
          <GoEyeClosed onClick={closeModal} />
        </nav>
        <h1>{service.name}</h1>
        <p>
          Services with more than 1 year+ hands-on Experience in building and
          designing innovative software solution
        </p>
        <section className="service-offer-sec">
          {service.offers.map((offer) => (
            <table key={offer.id}>
              <tbody>
                <tr className="service-offer" id="service-offer">
                  <td>
                    <IconContext.Provider
                      value={{
                        size: "1.5em",
                        className: "global-class-name",
                        color: "hsl(0, 0%, 100%)",
                      }}
                    >
                      <IoMdCheckmarkCircleOutline />
                    </IconContext.Provider>
                  </td>
                  <td>
                    <p>{offer}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </section>
      </div>
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
