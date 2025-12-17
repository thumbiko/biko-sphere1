import React from "react";
import "../styles/Experience.css";
import cvFile from "../assets/cv.pdf";

function Experience() {
  return (
    <div className="experience-page">
      <div className="experience-content">
        <h1>My Experience</h1>

        <div className="cv-display">
          <embed
            src={cvFile}
            width="100%"
            height="600px"
            type="application/pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
