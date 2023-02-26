import React from 'react';
import {
  FaFacebook, FaGithub, FaInstagram, FaTwitter,
  FaHome,
} from 'react-icons/fa';
import {
  AiFillProfile, AiOutlineContacts,
} from 'react-icons/ai';
import {
  GiSkills,
} from 'react-icons/gi';
import {
  MdElectricalServices,
} from 'react-icons/md';
import {
  SiAboutdotme,
} from 'react-icons/si';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-logo-section">
        <h1 className="cartoonish-font">Abubakar Ummar</h1>
        <ul>
          <li>
            <FaHome />
            : Home
          </li>
          <li>
            <AiFillProfile />
            : Projects
          </li>
          <li>
            <AiOutlineContacts />
            : Contact
          </li>
          <li>
            <GiSkills />
            : Skills
          </li>
          <li>
            <MdElectricalServices />
            : Services
          </li>
          <li>
            <SiAboutdotme />
            : About
          </li>
        </ul>
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
