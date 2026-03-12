import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-line"></div>
      <div className="socialMedia">
        <a 
          href="https://github.com/thumbiko" 
          target="_blank" 
          rel="noopener noreferrer"
          title="GitHub Engineering"
        >
          <GitHubIcon />
        </a>
      
        <a 
          href="https://www.linkedin.com/in/tivz/" 
          target="_blank" 
          rel="noopener noreferrer"
          title="LinkedIn Professional"
        >
          <LinkedInIcon />
        </a>

        <a 
          href="mailto:thumbikonyasulu@ymail.com" 
          title="Secure Communications"
        >
          <EmailIcon />
        </a>
      </div>
      <p className="copyright"> &copy; 2026 <span>BIKOSPHERE.COM</span> // ALL RIGHTS RESERVED </p>
    </div>
  );
}

export default Footer;