import React from 'react';
import '../styles/projects.css';
import { useSelector } from 'react-redux';

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
      {repo.map((r) => (
        <section key={r.id}>
          <h1>{r.title}</h1>
        </section>
      ))}
    </div>
  );
}

export default Portfolio;
