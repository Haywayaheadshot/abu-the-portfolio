import React from 'react';
import '../styles/home.css';
import { IconContext } from 'react-icons';
import {
  FaFacebook, FaGithub, FaInstagram, FaTwitter,
} from 'react-icons/fa';
// import abu from '../components/assets/images/abu-smile.jpg';

function Home() {
  return (
    <div className="home-container">
      <section className="home-header-div">
        <ul className="home-icons">
          <IconContext.Provider value={{ size: '2em', className: 'global-class-name' }}>
            <l1><FaGithub /></l1>
            <l1><FaFacebook /></l1>
            <l1><FaTwitter /></l1>
            <l1><FaInstagram /></l1>
          </IconContext.Provider>
        </ul>
        <div className="abu-image" />
      </section>
    </div>
  );
}

export default Home;
