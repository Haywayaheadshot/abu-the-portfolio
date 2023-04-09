import React from 'react';
import PropTypes from 'prop-types';
import { BsPatchCheck } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../../styles/skill.css';

const Skill = ({
  title, skillArray,
}) => (
  <div className="skill-container-ul">
    <h1 className="skill-header">
      {title}
    </h1>
    <section className="skill-list-container">
      {skillArray.map((skill) => (
        <div key={skill.id} className="skill-section" id="skill-section">
          <span>
            <IconContext.Provider value={{ size: '1.5em', className: 'global-class-name', color: 'hsl(0, 0%, 100%)' }}>
              <BsPatchCheck />
            </IconContext.Provider>
          </span>
          <p>
            {skill.skill}
            <br />
            <span className="level-span">
              {skill.level}
            </span>
          </p>
        </div>
      ))}
    </section>
  </div>
);

export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  skillArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};
