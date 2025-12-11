import React from "react";
import "../styles/Experience.css";

function Experience() {
  const openCv = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <div className="experience-page">
      <h1>My Experience</h1>

      <div style={{ margin: "20px 0" }}>
        <button onClick={openCv} style={styles.button}>
          Open My CV in a new tab
        </button>
      </div>

      <div className="cv-display">
        <embed
          src="/cv.pdf"
          width="100%"
          height="600px"
          type="application/pdf"
        />
      </div>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "#4e169e",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

export default Experience;
