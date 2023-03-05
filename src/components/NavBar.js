import React, { useState } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import '../styles/nav-bar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    const body = document.getElementById('body');
    // const popBg = document.querySelector('.hamburger-pop-bg');
    const footerAnime = document.querySelector('.bar');
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
      <NavLink to="/" onClick={() => toggleMenu(false)}>
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
          </ul>
        ) : null}
      </section>
      <section className="for-desk">
        <ul className="desk-ul">
          <li className="desk-ul-li">About</li>
          <li className="desk-ul-li">Contact</li>
          <li className="desk-ul-li">Projects</li>
        </ul>
      </section>
    </div>
  );
}

export default NavBar;
