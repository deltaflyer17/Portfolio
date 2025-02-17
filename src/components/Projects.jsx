import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-container"> 
        <h1 className="projects-title">My Projects and Experience</h1>

        <div className="projects-grid">
        <div className="project-card">
          <h2 className="project-title">Physics Calculator</h2>
          <p className="project-description">
            As part of my submission for the AP Computer Science Principles exam, my partner and I made a fully functioning physics calculator.
            It takes in input such as applied force and frictional force, and uses physics principles in order to display a graph of the object's movement. 
            Calculations are made using kinematic equations, resulting in values for acceleration, horizontal displacement, and maximum velocities.
          </p>
        </div>

        <div className="project-card">
          <h2 className="project-title">Skillset and Experience</h2>
          <p className="project-description">
            I am able to work with JavaScript, HTML, Python, CSS, and React.
            Represented my school at the Tennessee State Convention for Technology Student Association.
            Achieved state-semifinalist, and will represent my school again this year from April 2-5.
          </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
