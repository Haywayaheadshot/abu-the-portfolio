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
        <h1 className="landing-page-name body-font">ABUBAKAR UMMAR</h1>
      </div>
      <p className="home-par body-font">
        I am excited to offer my skills to help you create your dream product,
        feature, or website. Please take a moment to browse through my previous
        projects and skills. If you find yourself impressed with what you see,
        do not hesitate to reach out to me with your project. I am looking forward to
        working with you!
      </p>
    </section>
  </div>
);

export default Home;
