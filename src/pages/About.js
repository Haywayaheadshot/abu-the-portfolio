import React from 'react';
import { TfiMedallAlt } from 'react-icons/tfi';
import { BiBriefcaseAlt, BiSupport } from 'react-icons/bi';
import '../styles/about.css';
import { IconContext } from 'react-icons';

const About = () => (
  <div className="about-container" data-testid="about-container">
    <p className="about-container-par body-font" data-testid="about-container-par">
      Hi there! I’m
      {' '}
      <strong>Abubakar Ummar</strong>
      , a
      {' '}
      <strong>Full-Stack Developer</strong>
      {' '}
      with
      {' '}
      <strong>
        5+ years
        of experience
      </strong>
      {' '}
      in building user-friendly, responsive, and accessible web applications.
      I specialize in
      {' '}
      <strong>JavaScript, React, Ruby, and Ruby on Rails</strong>
      , and I’ve successfully deployed
      <strong> 10+ projects</strong>
      {' '}
      that showcase my ability to deliver high-quality solutions.
      <br />
      <br />
      I’m proficient in tools like
      {' '}
      <strong>Git, GitHub, Docker, Kubernetes, and RabbitMQ</strong>
      ,
      and I’m passionate about solving complex problems through clean, maintainable code.
      <br />
      <br />
      Here’s a snapshot of my expertise:
      <br />
      -
      {' '}
      <strong>Front-End:</strong>
      {' '}
      JavaScript, React, Redux, TypeScript, HTML5, CSS3, Tailwind, Bootstrap5.
      <br />
      -
      {' '}
      <strong>Back-End:</strong>
      {' '}
      Ruby, Ruby on Rails, MySQL, PostgreSQL.
      <br />
      -
      {' '}
      <strong>Tools & Methods:</strong>
      {' '}
      Git, GitHub, Heroku, Netlify, RSpec, TDD, Jest, React Testing Library,
      Chrome Dev Tools.
      <br />
      <br />
      I’m dedicated to continuous learning and adapting to new technologies, as evidenced by
      my successful transition from a non-tech background to a thriving career in tech.
      With experience in
      {' '}
      <strong>remote teamwork</strong>
      ,
      {' '}
      <strong>mentoring</strong>
      , and
      {' '}
      <strong>cross-cultural communication</strong>
      ,
      I’m confident in my ability to contribute effectively to your team.
      <br />
      <br />
      Let’s connect! Feel free to email me at
      {' '}
      <a href="mailto:ummarabubakar@outlook.com" target="_blank" rel="noreferrer">
        <span className="about-email body-font">
          ummarabubakar@outlook.com
        </span>
      </a>
      {' '}
      or check out my portfolio on GitHub
      {' '}
      <a href="https://www.github.com/Haywayaheadshot" target="_blank" rel="noreferrer">
        <i><b className="about-email body-font">HERE</b></i>
      </a>
      .
    </p>
    <section className="about-icons-section">
      <IconContext.Provider value={{ size: '1.5em', className: 'global-class-name skill-icons' }}>
        <div>
          <TfiMedallAlt />
          <h3 className="body-font">Experience</h3>
          <p className="body-font">
            5+ Years
          </p>
        </div>
        <div>
          <BiBriefcaseAlt />
          <h3 className="body-font">Completed</h3>
          <p className="body-font">
            10+ Projects
          </p>
        </div>
        <div>
          <BiSupport />
          <h3 className="body-font">Support</h3>
          <p className="body-font">
            Online 24/7
          </p>
        </div>
      </IconContext.Provider>
    </section>
    <section>
      <a href="/Abubakar-Ummars-Resume-v9.pdf" download="Abubakar Ummars' CV" className="download-cv body-font">
        Download CV
      </a>
    </section>
  </div>
);

export default About;
