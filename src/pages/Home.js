import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import profilePic from "../assets/profile.jpg";

function Home() {
  return (
    <div className="home">
      <section className="about">
        <img src={profilePic} alt="Profile of Thumbiko" className="profile-pic" />

        <h2>Hello. The Name is Thumbiko AKA Biko</h2>

        <div className="prompt">
          <p>
            Cybersecurity Analyst | Detection & Response | Cloud Security (AWS & Azure)  
            Focused on SOC operations, threat detection, log analysis, and securing cloud environments.
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/tivz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a href="mailto:thumbikonyasulu@ymail.com" aria-label="Email">
              <EmailIcon />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="skills">
        <h1>Skills</h1>

        <ol className="list">

          {/* Cybersecurity & Cloud Security */}
          <li className="item">
            <h2>Cybersecurity & Cloud Security</h2>
            <span>
              Threat Detection, SOC Monitoring, Incident Response, Log Analysis,
              Vulnerability Management, Endpoint Hardening, Forensics,
              MITRE ATT&CK, Network Traffic Analysis, Security Policies,
              ISO27001 & GDPR Compliance
            </span>
          </li>

          {/* Security Tools */}
          <li className="item">
            <h2>Security Tools</h2>
            <span>
              Microsoft Sentinel, Splunk, IBM QRadar, Nessus, Nmap, Wireshark,
              Metasploit, Kali Linux, IDS/IPS Fundamentals, Firewall Log Analysis,
              Microsoft Defender, CrowdStrike (exposure)
            </span>
          </li>

          {/* Cloud & DevOps */}
          <li className="item">
            <h2>Cloud & DevOps</h2>
            <span>
              AWS, Azure, VPN, IAM, MFA, CI/CD Basics, Linux Administration,
              System Patching, API Integrations
            </span>
          </li>

          {/* Programming & Automation */}
          <li className="item">
            <h2>Programming & Automation</h2>
            <span>
              Python, PowerShell, JavaScript, Java, C, KQL (Kusto Query Language)
            </span>
          </li>

          {/* Full-Stack / Web Development */}
          <li className="item">
            <h2>Full-Stack / Web Development</h2>
            <span>
              ReactJS, Angular, Redux, React Native, Flutter, NodeJS, ExpressJS,
              PostgreSQL, MySQL, MongoDB, HTML, CSS, Bootstrap, jQuery,
              MaterialUI, TailwindCSS, StyledComponents, NPM, Yarn, Ionic
            </span>
          </li>

        </ol>
      </section>
    </div>
  );
}

export default Home;
