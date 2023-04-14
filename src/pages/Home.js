import React from 'react';
import '../styles/home.css';
import { IconContext } from 'react-icons';
import {
  FaGithub, FaInstagram, FaLinkedinIn, FaTwitter,
} from 'react-icons/fa';

const Home = () => (
  <div className="home-container">
    <section className="home-header-div">
      <ul className="home-icons" data-testid="social-media-icons">
        <IconContext.Provider value={{
          size: '1em',
          className: 'global-class-name home-sm-icons',
        }}
        >
          <li>
            <a href="https://github.com/Haywayaheadshot" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abubakar-ummar/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/haywayalive" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/haywayaofficial/?next=%2Fhaywayaofficial%2F&hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </IconContext.Provider>
      </ul>
      <div className="abu-image" />
    </section>
    <section className="par-section">
      <div className="landing-page-header">
        <h1 className="landing-page-name">ABUBAKAR UMMAR</h1>
      </div>
      <p className="home-par">
        I can help you build a product, feature or website
        Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        try not to hestiate to contact me.
      </p>
    </section>
  </div>
);

export default Home;
