import React from "react";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  return (
    <div className="projectItem">
      {/* Background Image Wrapper */}
      <div 
        style={{ backgroundImage: `url(${image})` }} 
        className="bgImage" 
      />
      
      {/* Content Wrapper */}
      <div className="project-info">
        <h1> {name} </h1>
        
        <div className="button-wrapper">
          <button 
            className="view-project-btn"
            onClick={() => navigate("/project/" + id)}
          >
            <InfoOutlinedIcon style={{ fontSize: "18px" }} />
            VIEW DESCRIPTION
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;