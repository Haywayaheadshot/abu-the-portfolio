import React from "react";
import PropTypes from "prop-types";

import "../../styles/project.css";

const Project = ({
  title,
  mobileSrc,
  description,
  builtWith,
  liveDemo,
  sourceCode,
  deskScreenShot,
  stack,
}) => (
  <ul className="proj-ul">
    <li>
      <h1>{title}</h1>
    </li>
    <li>
      <img
        className="proj-screen-shot for-phone"
        src={mobileSrc === "" ? "no-camera.png" : mobileSrc}
        alt="Project Screenshot"
      />
      <img
        className="proj-screen-shot for-desk"
        src={deskScreenShot === "" ? "no-camera.png" : deskScreenShot}
        alt="Project Screenshot"
      />
    </li>
    <li>
      <p>{description}</p>
    </li>
    <li className="tech-built-with">
      <h3>Stack:</h3>
      {stack.map((s) => (
        <h3 key={`stack-${s.id}`}>[{s}]</h3>
      ))}
    </li>
    <li className="tech-built-with">
      <h3>Built with:</h3>
      {builtWith.map((tech) => (
        <h3 key={tech.id}>[{tech}]</h3>
      ))}
    </li>
    <li>
      <p>
        To view live demo, click{" "}
        <a href={liveDemo} target="_blank" rel="noreferrer">
          here.
        </a>
        <br />
        To see live source code, click{" "}
        <a href={sourceCode} target="_blank" rel="noreferrer">
          here.
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
