import React from "react";
import "../styles/Experience.css";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function Experience() {
  return (
    <div className="experience-page">
      <div className="experience-content">
        <h1>My Experience</h1>

        <Timeline position="alternate" className="experience-timeline">

          {/* Atos */}
          <TimelineItem>
            <TimelineOppositeContent className="timeline-date">
              Feb 2025 – Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="timeline-card">
              <h3>IT Service Desk Analyst</h3>
              <h4>Atos — Dublin</h4>
              <ul>
                <li>Implemented MFA & VPN troubleshooting, reducing access risks</li>
                <li>Tracked security incidents via ServiceNow</li>
                <li>Supported PowerShell automation initiatives</li>
                <li>Managed users via AD, M365, Exchange</li>
              </ul>
            </TimelineContent>
          </TimelineItem>

          {/* AWS */}
          <TimelineItem>
            <TimelineOppositeContent className="timeline-date">
              Feb 2024 – Jan 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="timeline-card">
              <h3>IT Hardware Technician</h3>
              <h4>Amazon Web Services — Dublin</h4>
              <ul>
                <li>Resolved 50+ weekly hardware & infra issues</li>
                <li>Maintained 99.9% system uptime</li>
                <li>Assisted with multi-site network configuration</li>
                <li>Performed patching & vulnerability mitigation</li>
              </ul>
            </TimelineContent>
          </TimelineItem>

          {/* Surecom */}
          <TimelineItem>
            <TimelineOppositeContent className="timeline-date">
              Jan 2022 – Jan 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent className="timeline-card">
              <h3>IT Security Support Analyst</h3>
              <h4>Surecom — Dublin</h4>
              <ul>
                <li>Conducted Nessus & Nmap vulnerability scans</li>
                <li>Supported ISO27001 & GDPR compliance</li>
                <li>Monitored SIEM alerts & logs</li>
                <li>Performed network traffic analysis (Wireshark)</li>
              </ul>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
