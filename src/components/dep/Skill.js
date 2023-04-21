import React from 'react';
import PropTypes from 'prop-types';
import { BsPatchCheck } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../../styles/skill.css';

const Skill = ({
  title, skillArray,
}) => (
  <div className="skill-container-ul">
    <h1 className="skill-header body-font">
      {title}
    </h1>
    <section className="skill-list-container">
      {skillArray.map((skill) => (
        <table key={skill.id}>
          <tbody>
            <tr className="skill-section" id="skill-section">
              <td>
                <IconContext.Provider value={{ size: '1.5em', className: 'global-class-name skill-icons' }}>
                  <BsPatchCheck />
                </IconContext.Provider>
              </td>
              <td>
                <p className="body-font">
                  {skill.skill}
                  <br />
                  <span className="level-span body-font">
                    {skill.level}
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </section>
  </div>
);

export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  skillArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};
