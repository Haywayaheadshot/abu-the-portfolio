import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/skill.css';

function Skill({
  title, skillArray,
}) {
  return (
    <ul className="proj-ul">
      <li>
        <h1>
          {title}
        </h1>
      </li>
      <li className="skill-list-container">
        {skillArray.map((skill) => (
          <ul className="skill-ul" key={skill.id}>
            <li>
              <h2>
                {skill.skill}
                <br />
                <span className="level-span">
                  {skill.level}
                </span>
              </h2>
            </li>
          </ul>
        ))}
      </li>
    </ul>
  );
}

export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  skillArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  // mobileSrc: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // liveDemo: PropTypes.string.isRequired,
  // sourceCode: PropTypes.string.isRequired,
  // deskScreenShot: PropTypes.string.isRequired,
  // stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
