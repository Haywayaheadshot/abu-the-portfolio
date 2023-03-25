import React from 'react';
import '../styles/projects.css';
import { useSelector } from 'react-redux';
import Project from '../components/dep/Project';

function Portfolio() {
  const repo = useSelector((state) => state.repos);
  return (
    <div className="proj-header-container">
      <section>
        <h1 className="projects-header">
          Welcome To The Projects Section
        </h1>
        <h4 className="projects-sub-header">
          Below are some of the projects I have worked on.
        </h4>
      </section>
      <section>
        <select>
          <option>
            All
          </option>
          <option>
            Front-End
          </option>
          <option>
            Back-End
          </option>
        </select>
      </section>
      <section className="projects-display">
        {repo.map((r) => (
          <div key={r.id}>
            <Project
              title={r.title}
              mobileSrc={r.mobileScreenShot}
              description={r.description}
              builtWith={r.builtWith}
              liveDemo={r.liveDemo}
              sourceCode={r.sourceCode}
              deskScreenShot={r.deskScreenShot}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
