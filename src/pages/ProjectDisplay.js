import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import someImage from '../assets/some-image-file.jpg';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={someImage} alt="Project screenshot" />

      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;