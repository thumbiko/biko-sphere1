import React from "react";
import "../styles/Home.css";
// The component for the Experience page
function Experience() {
  // Open the CV in a new tab
  const openCv = () => {
    window.open('/cv.pdf', '_blank'); // Assuming the CV is in the public directory
  };

  return (
    <div className="main_page">
    <div className="experience-page">
      <h1>My Experience</h1>

      {/* Option 1: Button to open CV in a new tab */}
      <div>
        <button onClick={openCv} style={styles.button}>
          Open My CV in a different browser
        </button>
      </div>

      {/* Option 2: Display CV directly on the page using embed */}
      <div className="cv-display">
        <h2>View My CV below</h2>
        <embed
          src="/cv.pdf"  // Path to your CV (in public folder)
          width="100%" 
          height="600px"  // Adjust the height as needed
        />
      </div>
    </div>
    </div>
  );
}

// Simple styling for the button
const styles = {
  button: {
    backgroundColor: '#4e169e',  // Matching the navbar color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Experience;
