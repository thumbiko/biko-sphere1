import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language"; // For live links
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project-display-page">
      <div className="project-card glass-card">
        <div className="project-header">
          <span className="project-id">SEC_OBJ_0{parseInt(id) + 1}</span>
          <h1>{project.name}</h1>
        </div>

        <div className="project-main">
          <div className="image-container">
            <img src={project.image} alt={project.name} />
          </div>

          <div className="project-info">
            <div className="info-section">
              <h3>CORE_COMPETENCIES</h3>
              <p className="skills-tags">{project.skills}</p>
            </div>

            <div className="info-section">
              <h3>SECURITY_ANALYSIS</h3>
              <p className="description">
                Analysis of implementation architecture, identifying potential 
                vulnerabilities and applying hardening strategies tailored for 2026 threats.
              </p>
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon className="link-icon" />
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                  <LanguageIcon className="link-icon" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;