import React from "react";
import "../styles/Experience.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

// Icons
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';

function Experience() {
  return (
    <div className="experience-page">
      <div className="experience-content">
        <h1 className="section-title">Professional Roadmap</h1>

        <Timeline position="alternate" className="experience-timeline">
          
          {/* Master's Degree */}
          <TimelineItem>
            <TimelineOppositeContent className="timeline-date">
              Sept 2025 – Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className="dot-active"><SchoolIcon /></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="timeline-card glass-card">
              <h3>MSc in Cybersecurity</h3>
              <h4>National College of Ireland</h4>
              <p>Focusing on advanced exploit automation, cloud digital forensics, and proactive threat hunting methodologies.</p>
            </TimelineContent>
          </TimelineItem>

          {/* Atos */}
          <TimelineItem>
            <TimelineOppositeContent className="timeline-date">
              May 2025 – Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary"><SecurityIcon /></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="timeline-card glass-card">
              <h3>IT Support Analyst II</h3>
              <h4>Atos — Dundrum</h4>
              <ul>
                <li>Triaging security signals across **M365 & Azure AD** to identify credential misuse.</li>
                <li>Investigating anomalous **PowerShell** execution and endpoint telemetry alerts.</li>
                <li>Orchestrating incident remediation between IT operations and engineering teams.</li>
              </ul>
            </TimelineContent>
          </TimelineItem>

          {/* AWS */}
          <TimelineItem>
            <TimelineOppositeContent className="timeline-date">
              Feb 2024 – Apr 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary"><StorageIcon /></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="timeline-card glass-card">
              <h3>IT Hardware Technician</h3>
              <h4>Amazon Web Services (AWS) — Tallaght</h4>
              <ul>
                <li>Secured cloud-adjacent infrastructure through strict hardware governance and access controls.</li>
                <li>Executed large-scale patching cycles and firmware updates to mitigate low-level vulnerabilities.</li>
                <li>Maintained high-availability environments aligned with global security compliance standards.</li>
              </ul>
            </TimelineContent>
          </TimelineItem>

          {/* Surecom */}
          <TimelineItem>
            <TimelineOppositeContent className="timeline-date">
              Jan 2022 – Jan 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary"><SecurityIcon /></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="timeline-card glass-card">
              <h3>IT Security Support Analyst</h3>
              <h4>Surecom — Rathcoole</h4>
              <ul>
                <li>Performed vulnerability scanning using **Nessus** and **Nmap** for risk surface reduction.</li>
                <li>Analyzed network traffic via **Wireshark** to validate Indicators of Compromise (IoCs).</li>
                <li>Supported **ISO 27001** audit preparation and GDPR evidence collection.</li>
              </ul>
            </TimelineContent>
          </TimelineItem>

          {/* Bachelor's Degree */}
          <TimelineItem>
            <TimelineOppositeContent className="timeline-date">
              Aug 2019 – May 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot><CodeIcon /></TimelineDot>
            </TimelineSeparator>
            <TimelineContent className="timeline-card glass-card">
              <h3>BSc in Computer Science</h3>
              <h4>Technological University Dublin</h4>
              
              <div className="degree-pillars">
                <div className="pillar">
                  <strong>Systems & Low-Level:</strong> 
                  <span>OS Administration, Microprocessors, Distributed Systems, and System Architecture.</span>
                </div>
                <div className="pillar">
                  <strong>Network Engineering:</strong> 
                  <span>Advanced Networking (1-3) and Network Programming.</span>
                </div>
                <div className="pillar">
                  <strong>Software & DevOps:</strong> 
                  <span>OOP, Algorithms, Enterprise App Development, Cloud Computing, and DevOps Foundations.</span>
                </div>
                <div className="pillar">
                  <strong>Data & Security:</strong> 
                  <span>Advanced Databases, Advanced Security (I & II), and Environmental Analytics.</span>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;