import React from 'react';
import { useSelector } from 'react-redux';
import Skill from '../components/dep/Skill';

function Skills() {
  const skill = useSelector((state) => state.skills);
  return (
    <div>
      <h1>My Skills</h1>
      {skill.map((s) => (
        <section key={s.id}>
          <Skill
            title={s.title}
          />
        </section>
      ))}
    </div>
  );
}

export default Skills;
