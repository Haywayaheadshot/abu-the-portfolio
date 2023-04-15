import React from 'react';
import '../styles/about.css';

const About = () => (
  <div className="about-container" data-testid="about-container">
    <p className="about-container-par" data-testid="about-container-par">
      Hi there! My name is Abubakar Ummar, and I am a full-stack developer
      with hands-on experience in JavaScript, React, Redux, Ruby, Ruby on Rails,
      HTML5, CSS3, Bootstrap5, and Tailwind. I am passionate about building user-friendly
      websites and creating responsive, accessible, and user-centric web applications.
      <br />
      <br />
      Throughout my studies at Microverse, a globally acclaimed
      software development school, I developed my skills and worked
      remotely with developers from various time zones. As a result,
      I am proficient in using Git, GitHub, Netlify, RSpec, TDD, Jest,
      React Testing Library, and Chrome Dev Tool.
      <br />
      <br />
      I am dedicated to challenging myself and adapting quickly to
      new technologies, as evidenced by my successful career transition
      from non-tech to tech. With remote pair-programming, teamwork, mentoring,
      and cross-cultural communication experience, I am confident in my ability
      to deliver quality work that meets your needs.
      <br />
      <br />
      Here are my key skills and experience:
      <br />
      - Front-End: JavaScript, React, Redux, HTML5, CSS3, Bootstrap5, Tailwind.
      <br />
      - Back-End: Ruby, Ruby on Rails.
      <br />
      - Tools & Methods: Git, GitHub, Netlify, Mobile/Responsive Development,
      RSpec, TDD, Jest, React Testing Library, Chrome Dev Tool.
      <br />
      <br />
      If you&apos;re looking for a skilled developer, let&apos;s schedule a Zoom call.
      Please feel free to email me at
      {' '}
      <a href="mailto:haywayaheadshotstrategy.fx@gmail.com">
        <span className="about-email">
          haywayaheadshotstrategy.fx@gmail.com
        </span>
      </a>
      .
      <br />
      <br />
      You can view my portfolio on Github
      {' '}
      <a href="https://www.github.com/Haywayaheadshot" target="_blank" rel="noreferrer"><i><b className="about-email">HERE</b></i></a>
      {' '}
      to see more of my work.
    </p>
    <section>
      <div>
        <h3>Experience</h3>
      </div>
      <div>
        <h3>Completed</h3>
      </div>
      <div>
        <h3>Support</h3>
      </div>
    </section>
    <section>
      <button type="button">
        <a href="/" download="Abubakar Ummars' CV">
          Download CV
        </a>
      </button>
    </section>
  </div>
);

export default About;
