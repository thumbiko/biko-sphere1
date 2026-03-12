import React from "react"; 
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="section-title">Security & Web Labs </h1>
        <p className="subtitle">
          SYSTEM_STATUS: <span className="status-online">READY</span> <br />
          Explore my latest exploits, defensive tools, and full-stack security implementations.
        </p>
        
        <div className="project-grid">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem
                key={idx}
                id={idx}
                name={project.name}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;