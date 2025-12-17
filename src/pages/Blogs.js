import React, { useState } from "react";
import "../styles/Blogs.css";

const blogPosts = [
  {
    id: 1,
    title: "Cybersecurity Fundamentals",
    summary: "Core security principles every analyst should know.",
    content: (
      <ul className="blog-bullets">
        <li>Enable centralized logging for all cloud services</li>
        <li>Apply the principle of least privilege to IAM roles</li>
        <li>Monitor logs for indicators of compromise</li>
        <li>Protect credentials using MFA and strong policies</li>
        <li>Regularly review access permissions</li>
      </ul>
    ),
    date: "2025-12-17T14:30:00Z",
  },
  {
    id: 2,
    title: "Cloud Security Tips (AWS)",
    summary: "Practical security guidance for AWS environments.",
    content: (
      <ul className="blog-bullets">
        <li>Enable AWS CloudTrail and CloudWatch logging</li>
        <li>Use least-privilege IAM roles and policies</li>
        <li>Enforce IMDSv2 on all EC2 instances</li>
        <li>Block public access to S3 buckets</li>
        <li>Keep ECR container images private</li>
      </ul>
    ),
    date: "2025-12-17T15:00:00Z",
  },
];

function Blogs() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="blogs">
      <h1>Blogs</h1>
      <p>Welcome to my technical blogs.</p>

      <div className="blog-list">
        {blogPosts.map((blog) => {
          const formattedDate = new Date(blog.date).toLocaleString("en-IE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });

          return (
            <div
              className={`blog-card ${flipped[blog.id] ? "flipped" : ""}`}
              key={blog.id}
              onClick={() => toggleFlip(blog.id)}
            >
              <div className="tooltip">Click to flip</div>

              <div className="blog-card-inner">
                <div className="blog-card-front">
                  <div className="blog-date">{formattedDate}</div>
                  <h2>{blog.title}</h2>
                  <p>{blog.summary}</p>
                </div>

                <div className="blog-card-back">
                  <div className="blog-date">{formattedDate}</div>
                  {blog.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
