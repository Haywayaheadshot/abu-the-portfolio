import React from 'react';
import PropTypes from 'prop-types';
import { BsPatchCheck } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../../styles/skill.css';

const Skill = ({
  title, skillArray,
}) => (
  <ul className="skill-container-ul">
    <li>
      <h1 className="skill-header">
        {title}
      </h1>
    </li>
    <li className="skill-list-container">
      {skillArray.map((skill) => (
        <div key={skill.id} className="skill-section">
          <section>
            <IconContext.Provider value={{ size: '1.5em', className: 'global-class-name', color: 'hsl(0, 0%, 100%)' }}>
              <BsPatchCheck />
            </IconContext.Provider>
          </section>
          <h2 className="skill-ul">
            {skill.skill}
            <br />
            <span className="level-span">
              {skill.level}
            </span>
          </h2>
        </div>
      ))}
    </li>
  </ul>
);

export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  skillArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};
