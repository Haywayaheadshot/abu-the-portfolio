import React from 'react';
import PropTypes from 'prop-types';
import { BsPatchCheck } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../../styles/skill.css';

function Skill({
  title, skillArray,
}) {
  return (
    <ul className="skill-container-ul">
      <li>
        <h1 className="skill-header">
          {title}
        </h1>
      </li>
      <li className="skill-list-container">
        {skillArray.map((skill) => (
          <ul key={skill.id} className="skill-section">
            <li className="skill-section-li">
              <IconContext.Provider value={{ size: '1.5em', className: 'global-class-name', color: 'hsl(0, 0%, 100%)' }}>
                <BsPatchCheck />
              </IconContext.Provider>
            </li>
            <li className="skill-section-li">
              <h2 className="skill-ul">
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
