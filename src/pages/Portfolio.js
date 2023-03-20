import React, { useEffect } from 'react';
import '../styles/projects.css';
import { useDispatch } from 'react-redux';
import { getRepos } from '../redux/projects/Projects';

function Portfolio() {
  // const project = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepos());
  });
  // console.log(project);
  return (
    <div className="proj-header-container">
      <section>
        <h1 className="projects-header">
          My Portfolio
        </h1>
        <h4 className="projects-sub-header">
          Project I have worked on
        </h4>
      </section>
      <section>
        <h1>
          Recieve Projects here
        </h1>
      </section>
    </div>
  );
}

export default Portfolio;
