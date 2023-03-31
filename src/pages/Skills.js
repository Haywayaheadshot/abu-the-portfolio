import React from 'react';
import { useSelector } from 'react-redux';
import Skill from '../components/dep/Skill';
import '../styles/skills.css';

const Skills = () => {
  const skill = useSelector((state) => state.skills);
  return (
    <div className="skills-container">
      <h1 className="skills-container-h1">Skills</h1>
      <section className="skills-display">
        {skill.map((s) => (
          <div key={s.id} data-testid="skill">
            <Skill
              title={s.title}
              skillArray={s.skillArray}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
