import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a 
          href="https://www.instagram.com/bikosphere/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      
        <a 
          href="https://www.linkedin.com/in/tivz/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2025 BikoSphere.com</p>
    </div>
  );
}

export default Footer;
