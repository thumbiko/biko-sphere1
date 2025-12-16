import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import profilePic from "../assets/profile.jpg";

function Home() {
  return (
    <div className="home">
      {/* About Section */}
      <section className="about">
  <div className="about-container">
    <img
      src={profilePic}
      alt="Profile of Biko"
      className="profile-pic"
    />

    <h2>Hello. The Name is Biko</h2>

    <div className="prompt">
      <p>
        Cybersecurity Analyst | Detection & Response | Cloud Security (AWS &
        Azure)
        <br />
        Focused on SOC operations, threat detection, log analysis, and
        securing cloud environments.
      </p>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/tivz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="social-icon" />
        </a>

        <a href="mailto:thumbikonyasulu@ymail.com" aria-label="Email">
          <EmailIcon className="social-icon" />
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon className="social-icon" />
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Spacer */}
      <div className="skills-spacer"></div>

      {/* Skills Section */}
      <section className="skills">
        <h1>Skills</h1>

        <ul className="list">
          <li className="item">
            <h2>Cybersecurity & Cloud Security</h2>
            <span>
              Threat Detection, SOC Monitoring, Incident Response, Log Analysis,
              Vulnerability Management, Endpoint Hardening, Forensics,
              MITRE ATT&CK, Network Traffic Analysis, Security Policies,
              ISO27001 & GDPR Compliance
            </span>
          </li>

          <li className="item">
            <h2>Security Tools</h2>
            <span>
              Microsoft Sentinel, Splunk, IBM QRadar, Nessus, Nmap, Wireshark,
              Metasploit, Kali Linux, IDS/IPS Fundamentals, Firewall Log Analysis,
              Microsoft Defender, CrowdStrike (exposure)
            </span>
          </li>

          <li className="item">
            <h2>Cloud & DevOps</h2>
            <span>
              AWS, Azure, VPN, IAM, MFA, CI/CD Basics, Linux Administration,
              System Patching, API Integrations
            </span>
          </li>

          <li className="item">
            <h2>Programming & Automation</h2>
            <span>
              Python, PowerShell, JavaScript, Java, C, KQL (Kusto Query Language)
            </span>
          </li>

          <li className="item">
            <h2>Full-Stack / Web Development</h2>
            <span>
              ReactJS, Angular, Redux, React Native, Flutter, NodeJS, ExpressJS,
              PostgreSQL, MySQL, MongoDB, HTML, CSS, Bootstrap, jQuery,
              MaterialUI, TailwindCSS, StyledComponents, NPM, Yarn, Ionic
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
