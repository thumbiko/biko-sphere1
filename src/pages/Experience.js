import React from "react";
import "../styles/Experience.css";

function Experience() {
  const cvPath = process.env.PUBLIC_URL + "/cv.pdf";

  return (
    <div className="experience-page">
      <h1>My Experience</h1>

      <div className="cv-display">
        <embed
          src={cvPath}
          width="100%"
          height="600px"
          type="application/pdf"
        />
      </div>
    </div>
  );
}

export default Experience;
