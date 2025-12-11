import React from "react";
import "../styles/Home.css";

function Experience() {
  const openCv = () => {
    window.open("/cv.pdf", "_blank"); 
  };

  return (
    <div className="main_page">
      <div className="experience-page">
        <h1>My Experience</h1>

        {/* Button to open CV */}
        <div>
          <button onClick={openCv} className="cv-button">
            Open My CV in a different browser
          </button>
        </div>

        {/* Display CV directly */}
        <div className="cv-display">
          <h2>View My CV below</h2>
          <embed
            src="/cv.pdf"
            width="100%"
            height="600px"
            className="cv-embed"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
