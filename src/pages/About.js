import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div className="about-container" data-testid="about-container">
      <p className="about-container-par" data-testid="about-container-par">
        Hi! My name is Abubakar Ummar, and I&apos;m a full-stack
        development student enrolled at Microverse.
        A software development school that provides a
        platform and materials for tech enthusiasts from
        all over the world to learn and establish
        themselves as web developers.
        <br />
        <br />
        I have experience working with JavaScript,
        Ruby, Ruby on Rails, React, and Redux.
        With my dedication and passion for challenging myself,
        I worked tirelessly to shift my career toward programming,
        demonstrating my ability to adapt quickly to new things.
        <br />
        <br />
        Completely immersed in development while working on a
        number of projects,
        including a react calculator using JavaScript, React,
        and Redux over the last 4 months.
        While at Microverse, I am spending 8 hours per day working
        remotely with developers from 10+ different time zones,
        where I am ensuring 100% on-time project completion.
        I am passionate about building user-friendly websites and
        am knowledgeable in creating accessible,
        user-friendly, and responsive web applications.
        <br />
        <br />
        Front-End: JavaScript, React, Redux, HTML5, CSS3, Bootstrap5, Tailwind.
        <br />
        Back-End: Ruby, Ruby on Rails.
        <br />
        Tools & Methods: Git, GitHub, Netlify, Mobile/Responsive Development,
        RSpec, TDD, Jest,
        React Testing Library, Chrome Dev Tool.
        <br />
        Professional: Remote Pair-Programming, Teamwork, Mentoring,
        Cross-cultural Communication.
        <br />
        <br />
        Looking for a developer? I&apos;d love to schedule a Zoom call. Email me at
        {' '}
        <strong>haywayaheadshotstrategy.fx@gmail.com</strong>
        <br />
        <br />
        Click
        {' '}
        <a href="https://www.github.com/Haywayaheadshot" target="_blank" rel="noreferrer"><i><b>HERE</b></i></a>
        {' '}
        to view my Github.
      </p>
    </div>
  );
}

export default About;
