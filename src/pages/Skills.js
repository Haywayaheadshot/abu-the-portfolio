import React from 'react';
import { useSelector } from 'react-redux';
import Skill from '../components/dep/Skill';
import '../styles/skills.css';

function Skills() {
  const skill = useSelector((state) => state.skills);
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      {skill.map((s) => (
        <section key={s.id} className="skills-display" data-testid="skill">
          <Skill
            title={s.title}
            skillArray={s.skillArray}
          />
        </section>
      ))}
    </div>
  );
}

export default Skills;
