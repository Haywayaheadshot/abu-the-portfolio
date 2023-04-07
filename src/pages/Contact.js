import React from 'react';
// import Blobs from '../components/dep/Blobs';
// import blood from '../components/assets/images/blood.png';
// import LocationMap from '../components/dep/LocationMap';
import '../styles/contact.css';

const Contact = () => (
  <div className="contact-container">
    <h1 className="contact-header">Contact Me</h1>
    <section className="contact-main">
      <form className="contact-form">
        <label htmlFor="name">
          Name
          <br />
          <input type="text" placeholder="Name" id="name" />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <br />
          <input type="text" placeholder="Email" id="email" />
        </label>
        <br />
        <label htmlFor="message">
          Message
          <br />
          <textarea type="text area" placeholder="Message" id="message" />
        </label>
        <section className="contact-submit-btn-div">
          <button className="contact-submit-btn" name="submit" type="submit">
            Submit
          </button>
        </section>
      </form>
      {/* <LocationMap /> */}
    </section>
  </div>
);

export default Contact;
