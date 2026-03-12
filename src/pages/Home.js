import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import "../styles/Home.css";
import profilePic from "../assets/profile.jpg";
//import profilePic from "../assets/profile4.jpg";

function Home() {
  return (
    <div className="home">
      {/* --- HERO / ABOUT SECTION --- */}
      <section className="about">
        <div className="glass-card about-container">
          <div className="profile-wrapper">
            <img src={profilePic} alt="Biko" className="profile-pic" />
          </div>

          <h2>BIKO <span>.</span></h2>
          <div className="prompt">
            <p className="hero-subtitle">
              Offensive Security Enthusiast & Defensive Strategist
            </p>
            <div className="cert-badges">
              <span className="badge">CompTIA PenTest+</span>
              <span className="badge">CompTIA CySA+</span>
            </div>
            <p className="hero-description">
              Bridging the gap between <strong>Threat Detection</strong> and <strong>Ethical Hacking</strong>. 
              Specializing in exploit research, network pivoting, and cloud-native security response.
            </p>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/tivz/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="social-icon" />
              </a>
              <a href="mailto:thumbikonyasulu@ymail.com">
                <EmailIcon className="social-icon" />
              </a>
              <a href="https://github.com/">
                <GithubIcon className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (MATCHING DESIGN) --- */}
      <section className="skills">
        <div className="glass-card skills-container">
          <h1 className="section-title">Technical <span>Arsenal</span></h1>
          
          <div className="skills-grid">
            <div className="skill-card">
              <h3><VerifiedUserIcon className="skill-icon" /> Ethical Hacking</h3>
              <p>Red Teaming, Metasploit, OSINT, Active Recon, Privilege Escalation, and Lateral Movement (Pivoting).</p>
            </div>

            <div className="skill-card">
              <h3><VerifiedUserIcon className="skill-icon" /> Security Ops</h3>
              <p>Threat Hunting, Incident Response, SIEM Analysis, Microsoft Sentinel, Splunk, and MITRE ATT&CK.</p>
            </div>

            <div className="skill-card">
              <h3><VerifiedUserIcon className="skill-icon" /> Network Security</h3>
              <p>Packet Analysis (Wireshark), WPA3/5G Vulnerabilities, Firewall Evasion, and Zero Trust Architecture.</p>
            </div>

            <div className="skill-card">
              <h3><VerifiedUserIcon className="skill-icon" /> Web & Cloud</h3>
              <p>OWASP Top 10, SQLi, XSS, SSRF, AWS/Azure Auditing, and Identity Access Management (IAM) Hardening.</p>
            </div>

            <div className="skill-card">
              <h3><VerifiedUserIcon className="skill-icon" /> Automation</h3>
              <p>Python (Exploit Dev), PowerShell Scripting, KQL (Kusto), Bash, and Secure Code Review.</p>
            </div>

            <div className="skill-card">
              <h3><VerifiedUserIcon className="skill-icon" /> Cryptography</h3>
              <p>Hashing Algorithms, MFA Bypass, Kerberos/NTLM Exploits, and PKI Infrastructure management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;