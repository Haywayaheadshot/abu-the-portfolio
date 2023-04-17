import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (event) => {
    const { name, email, message } = event.target.elements;
    const newErrors = {};

    if (!name.value.trim()) {
      event.preventDefault();
      newErrors.name = 'Please input your name';
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      event.preventDefault();
      newErrors.email = 'Please input a valid email address';
    }

    if (!message.value.trim()) {
      event.preventDefault();
      newErrors.message = 'Please input a message';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true; // allow form submission
    }
    return false; // prevent form submission
  };

  return (
    <div className="contact-container">
      <section className="contact-main">
        <h1 className="contact-header">Tell Me About Your Project</h1>
        <form className="contact-form" action="https://formspree.io/f/xpznwngg" method="POST" onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            Name
            <br />
            <input type="text" placeholder="Name" id="name" name="name" />
          </label>
          {errors.name && <span className="contact-error-message">{errors.name}</span>}
          <br />
          <label htmlFor="email">
            Email
            <br />
            <input type="email" placeholder="Email" id="email" name="email" />
          </label>
          {errors.email && <span className="contact-error-message">{errors.email}</span>}
          <br />
          <label htmlFor="message">
            Project
            <br />
            <textarea placeholder="Message" id="message" name="message" />
          </label>
          {errors.message && <span className="contact-error-message">{errors.message}</span>}
          <section className="contact-submit-btn-div">
            <button className="contact-submit-btn" name="submit" type="submit">
              Submit
            </button>
          </section>
        </form>
      </section>
      <section className="for-desk">
        <h1>Talk To Me</h1>
        <ul>
          <li>
            Whatsapp
          </li>
          <li>
            Email
          </li>
          <li>
            Linkedin
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
