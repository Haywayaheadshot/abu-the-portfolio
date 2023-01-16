import React, { useState } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import '../styles/nav-bar.css';

function NavBar() {
  const [open, setClose] = useState(false);
  return (
    <div className="nav-container">
      <h1 className="logo">Abubakar Ummar</h1>
      <section className="for-phone">
        <Hamburger
          direction="right"
          easing="ease-in"
          toggled={open}
          toggle={setClose}
          label="Show menu"
          distance="lg"
          size={44}
        />
        { open ? (
          <ul className="hamburger-ul">
            <li className="hamburger-ul-li">About</li>
            <li className="hamburger-ul-li">Contact</li>
            <li className="hamburger-ul-li">Projects</li>
          </ul>
        ) : null }
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
