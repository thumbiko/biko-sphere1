import React, { useState } from "react";
import "../styles/Blogs.css";

const blogPosts = [
  {
    id: 1,
    title: "Cybersecurity Fundamentals",
    summary:
      "Key concepts every security professional should understand.",
    content: (
      <>
        <h3>Top Cloud Security Principles</h3>
        <p>
          Strong cloud security starts with visibility and control. Enable
          comprehensive logging, apply the principle of least privilege,
          protect instance metadata, and restrict public access to storage
          and container registries.
        </p>
        <p>
          These foundational practices significantly reduce attack surface
          and limit the impact of potential compromises.
        </p>
      </>
    ),
    date: "2025-12-17T14:30:00Z",
  },
  {
    id: 2,
    title: "Cloud Security Tips (AWS)",
    summary:
      "Practical security guidance for AWS cloud environments.",
    content: (
      <>
        <h3>AWS Top 5 Security Tips</h3>
        <p>
          Secure AWS environments by enabling CloudTrail logging, enforcing
          least privilege IAM roles, using IMDSv2, blocking public S3 access,
          and keeping ECR container images private.
        </p>
        <p>
          Combined with MFA and strong password policies, these measures
          help prevent common cloud security breaches.
        </p>
      </>
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
