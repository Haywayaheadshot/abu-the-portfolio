import React, { useState } from 'react';
import '../styles/projects.css';
import { useSelector } from 'react-redux';
import Project from '../components/dep/Project';

function Portfolio() {
  const repo = useSelector((state) => state.repos);

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const filteredRepo = selectedOption
    ? repo.filter((r) => r.stack.includes(selectedOption))
    : repo;

  return (
    <div className="proj-header-container">
      <section>
        <h1 className="projects-header">Welcome To The Projects Section.</h1>
        <h4 className="projects-sub-header">
          Below are some of the projects I have worked on.
        </h4>
      </section>
      <select className="select-projs" onChange={handleSelectChange} data-testid="select-projs">
        <option value="">All Projects</option>
        <option value="Front-End">Front-End Projects</option>
        <option value="Back-End">Back-End Projects</option>
        <option value="Full-Stack">Full-Stack Projects</option>
      </select>
      <section className="projects-display" data-testid="project">
        {filteredRepo.map((r) => (
          <Project
            key={r.id}
            id={r.id}
            title={r.title}
            mobileSrc={r.mobileScreenShot}
            description={r.description}
            builtWith={r.builtWith}
            liveDemo={r.liveDemo}
            sourceCode={r.sourceCode}
            deskScreenShot={r.deskScreenShot}
            stack={r.stack}
          />
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
