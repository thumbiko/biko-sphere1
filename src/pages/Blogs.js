import React, { useState } from "react";
import "../styles/Blogs.css";

const blogPosts = [
  {
    id: 1,
    title: "ADVANCED NETWORK PIVOTING",
    summary: "Post-exploitation strategies for traversing segmented enterprise environments.",
    content: (
      <ul className="blog-bullets">
        <li>Establishing persistent SOCKS5 proxies</li>
        <li>Dynamic port forwarding via SSH & Chisel</li>
        <li>Lateral movement using Pass-the-Hash (PtH)</li>
        <li>Routing through compromised dual-homed hosts</li>
      </ul>
    ),
    date: "2026-03-12T09:00:00Z",
  },
  {
    id: 2,
    title: "API EXPLOITATION & BOLA",
    summary: "Breaking modern application logic via Broken Object Level Authorization.",
    content: (
      <ul className="blog-bullets">
        <li>Enumerating IDOR vulnerabilities in RESTful APIs</li>
        <li>JWT Manipulation and Secret Brute-forcing</li>
        <li>Bypassing rate limits for credential stuffing</li>
        <li>Mass Assignment and Data Over-posting attacks</li>
      </ul>
    ),
    date: "2026-02-15T12:00:00Z",
  },
  {
    id: 3,
    title: "THREAT HUNTING WITH KQL",
    summary: "Detecting sophisticated adversaries using Microsoft Sentinel logic.",
    content: (
      <ul className="blog-bullets">
        <li>Identifying anomalous PowerShell execution patterns</li>
        <li>Monitoring for Living-off-the-Land (LotL) binaries</li>
        <li>Correlating identity logs with endpoint telemetry</li>
        <li>Building high-fidelity custom analytic rules</li>
      </ul>
    ),
    date: "2026-01-10T15:30:00Z",
  },
];

function Blogs() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="blogs-page">
      <div className="blogs-content">
        <h1 className="section-title">SECURITY INTELLIGENCE</h1>
        <p className="subtitle">Technical Research & Offensive Methodologies</p>

        <div className="blog-grid">
          {blogPosts.map((blog) => {
            const formattedDate = new Date(blog.date).toLocaleDateString("en-IE", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });

            return (
              <div
                className={`blog-card ${flipped[blog.id] ? "flipped" : ""}`}
                key={blog.id}
                onClick={() => toggleFlip(blog.id)}
              >
                <div className="blog-card-inner">
                  {/* Front: Same Glass look as Experience */}
                  <div className="blog-card-front glass-card">
                    <div className="blog-header">
                      <span className="blog-tag">REPORT_{blog.id}</span>
                      <span className="blog-date">{formattedDate}</span>
                    </div>
                    <h2>{blog.title}</h2>
                    <p>{blog.summary}</p>
                    <div className="flip-hint">ACCESS_DATA »</div>
                  </div>

                  {/* Back: High Contrast Gold/Dark */}
                  <div className="blog-card-back glass-card active-border">
                    <h3 className="back-title">TECHNICAL_SPECS</h3>
                    {blog.content}
                    <div className="flip-hint">CLOSE_FILE «</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;