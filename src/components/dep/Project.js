import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/project.css';

const Project = ({
  title, mobileSrc, description, builtWith, liveDemo, sourceCode, deskScreenShot, stack,
}) => (
  <ul className="proj-ul">
    <li>
      <h1 className="body-font">
        {title}
      </h1>
    </li>
    <li>
      <img className="proj-screen-shot for-phone" src={mobileSrc === '' ? 'no-camera.png' : mobileSrc} alt="Project Screenshot" />
      <img className="proj-screen-shot for-desk" src={deskScreenShot === '' ? 'no-camera.png' : deskScreenShot} alt="Project Screenshot" />
    </li>
    <li>
      <p className="body-font">
        {description}
      </p>
    </li>
    <li className="tech-built-with">
      <h3 className="body-font">Stack:</h3>
      <ul className="built-with-stack">
        {stack.map((s) => (
          <li key={`stack-${s.id}`} className="body-font">
            [
            {s}
            ]
          </li>
        ))}
      </ul>
    </li>
    <li className="tech-built-with">
      <h3 className="body-font">Built with:</h3>
      <ul className="built-with-tech">
        {builtWith.map((tech) => (
          <li key={tech.id} className="body-font">
            [
            {tech}
            ]
          </li>
        ))}
      </ul>
    </li>
    <li>
      <p className="body-font">
        To view
        {' '}
        <b>LIVE DEMO</b>
        , click
        {' '}
        <a href={liveDemo} target="_blank" rel="noreferrer">
          <b className="body-font source-code-live-demo">HERE</b>
          .
        </a>
        <br />
        To see live
        {' '}
        <b>SOURCE CODE</b>
        , click
        {' '}
        <a href={sourceCode} target="_blank" rel="noreferrer">
          <b className="body-font source-code-live-demo">HERE</b>
          .
        </a>
      </p>
    </li>
  </ul>
);

export default Project;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  mobileSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  builtWith: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveDemo: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  deskScreenShot: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
