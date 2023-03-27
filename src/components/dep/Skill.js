import React from 'react';
import PropTypes from 'prop-types';

function Skill({
  title,
}) {
  return (
    <div>{title}</div>
  );
}

export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  // mobileSrc: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // builtWith: PropTypes.arrayOf(PropTypes.string).isRequired,
  // liveDemo: PropTypes.string.isRequired,
  // sourceCode: PropTypes.string.isRequired,
  // deskScreenShot: PropTypes.string.isRequired,
  // stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
