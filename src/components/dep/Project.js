import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, mobileSrc }) => (
  <ul>
    <li>
      {title}
    </li>
    <li>
      <img src={mobileSrc} alt="Project Screenshot" />
    </li>
  </ul>
);

export default Project;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  mobileSrc: PropTypes.string.isRequired,
};
