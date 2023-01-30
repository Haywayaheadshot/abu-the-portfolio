import React from 'react';
import {
  FaFacebook, FaGithub, FaInstagram, FaTwitter,
} from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-logo-section">
        <h1 className="cartoonish-font">Abubakar Ummar</h1>
      </section>
      <section className="footer-social-media-section">
        <h1>Follow Me On</h1>
        <ul>
          <l1><FaGithub /></l1>
          <l1><FaFacebook /></l1>
          <l1><FaTwitter /></l1>
          <l1><FaInstagram /></l1>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
