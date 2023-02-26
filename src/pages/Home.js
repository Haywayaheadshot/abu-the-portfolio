import React from 'react';
import '../styles/home.css';
import { IconContext } from 'react-icons';
import {
  FaFacebook, FaGithub, FaInstagram, FaTwitter,
} from 'react-icons/fa';
import desktop from '../components/assets/images/desktop-computer.png';

function Home() {
  return (
    <div className="home-container">
      <section className="home-header-div">
        <ul className="home-icons">
          <IconContext.Provider value={{ size: '1em', className: 'global-class-name' }}>
            <l1><FaGithub /></l1>
            <l1><FaFacebook /></l1>
            <l1><FaTwitter /></l1>
            <l1><FaInstagram /></l1>
          </IconContext.Provider>
        </ul>
        <div className="abu-image" />
      </section>
      <section className="landing-page-header">
        <img src={desktop} alt="Monitor and keyboard" className="desktop-computer" />
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
