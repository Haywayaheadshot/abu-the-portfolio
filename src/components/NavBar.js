import React, { useEffect, useState } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../styles/nav-bar.css';
import { NavLink } from 'react-router-dom';
import useDarkMode from './dep/DarkMode';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const footerAnime = document.querySelector('.bar');
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => {
    setOpen(!open);
    const body = document.getElementById('body');
    // const popBg = document.querySelector('.hamburger-pop-bg');
    if (!open) {
      body.classList.add('open');
      // popBg.style.display = 'block';
      footerAnime.style.display = 'none';
    } else {
      body.classList.remove('open');
      // popBg.style.display = 'none';
      footerAnime.style.display = 'flex';
    }
  };

  return (
    <div className="nav-container">
      <NavLink
        to="/"
        onClick={() => {
          setOpen(false);
          footerAnime.style.display = 'flex';
        }}
      >
        <h1 className="logo cartoonish-font">Abubakar Ummar</h1>
      </NavLink>
      <section className="for-phone">
        <Hamburger
          direction="right"
          easing="ease-in"
          toggled={open}
          toggle={toggleMenu}
          label="Show menu"
          distance="lg"
          size={44}
        />
        {open ? (
          <ul className="hamburger-ul">
            <NavLink to="/about" onClick={() => toggleMenu(false)}>
              <li className="hamburger-ul-li">About</li>
            </NavLink>
            <NavLink to="/contact" onClick={() => toggleMenu(false)}>
              <li className="hamburger-ul-li">Contact</li>
            </NavLink>
            <NavLink to="/projects" onClick={() => toggleMenu(false)}>
              <li className="hamburger-ul-li">Projects</li>
            </NavLink>
            <NavLink to="/skills" onClick={() => toggleMenu(false)}>
              <li className="hamburger-ul-li">Skills</li>
            </NavLink>
            <NavLink to="/services" onClick={() => toggleMenu(false)}>
              <li className="hamburger-ul-li">Services</li>
            </NavLink>
            <li>
              <div className={isDarkMode ? 'dark' : ''}>
                <button type="button" onClick={toggleDarkMode}>
                  <IconContext.Provider value={{ size: '3em', className: 'global-class-name darkmode-btn', color: 'black' }}>
                    {isDarkMode ? <BsFillSunFill /> : <BsMoon />}
                  </IconContext.Provider>
                </button>
              </div>
            </li>
          </ul>
        ) : null}
      </section>
      <section className="for-desk">
        <ul className="desk-ul">
          <li className="desk-ul-li">
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li className="desk-ul-li">
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="desk-ul-li">
            <NavLink to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="desk-ul-li">
            <NavLink to="/skills">
              Skills
            </NavLink>
          </li>
          <li className="desk-ul-li">
            <NavLink to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <div className={isDarkMode ? 'dark' : ''}>
              <button type="button" onClick={toggleDarkMode}>
                <IconContext.Provider value={{ size: '1em', className: 'global-class-name darkmode-btn', color: 'black' }}>
                  {isDarkMode ? <BsFillSunFill /> : <BsMoon />}
                </IconContext.Provider>
              </button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NavBar;
