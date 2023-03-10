import React from 'react';
import '../styles/home.css';
import { IconContext } from 'react-icons';
import {
  FaGithub, FaInstagram, FaLinkedinIn, FaTwitter,
} from 'react-icons/fa';
// import desktop from '../components/assets/images/desktop-computer.png';

function Home() {
  return (
    <div className="home-container">
      <section className="home-header-div">
        <ul className="home-icons">
          <IconContext.Provider value={{ size: '1em', className: 'global-class-name', color: 'hsl(0, 0%, 100%)' }}>
            <l1>
              <a href="https://github.com/Haywayaheadshot" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </l1>
            <l1>
              <a href="https://www.linkedin.com/in/abubakar-ummar/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </l1>
            <l1>
              <a href="https://twitter.com/haywayalive" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </l1>
            <l1>
              <a href="https://www.instagram.com/haywayaofficial/?next=%2Fhaywayaofficial%2F&hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </l1>
          </IconContext.Provider>
        </ul>
        <div className="abu-image" />
      </section>
      <section className="landing-page-header">
        {/* <img src={desktop} alt="Monitor and keyboard" className="desktop-computer" /> */}
        <h1 className="landing-page-name">ABUBAKAR UMMAR</h1>
      </section>
      <section className="par-section">
        <p className="home-par">
          I can help you build a product, feature or website
          Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          try not to hestiate to contact me.
        </p>
      </section>
    </div>
  );
}

export default Home;
