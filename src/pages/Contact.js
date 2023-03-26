import React from 'react';
// import Blobs from '../components/dep/Blobs';
// import blood from '../components/assets/images/blood.png';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Me</h1>
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
          <input className="contact-submit-btn" type="submit" />
        </section>
      </form>
    </div>
  );
}

export default Contact;
