import React, { useState } from "react";
import "../styles/Blogs.css";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Cybersecurity Basics",
    summary: "An introduction to key cybersecurity concepts and best practices.",
    content:
      "Full content of the blog goes here. You can include paragraphs, links, or code snippets.",
    date: "2025-12-17T14:30:00Z",
  },
  {
    id: 2,
    title: "Cloud Security Tips for AWS and Azure",
    summary: "Best practices for securing cloud environments effectively.",
    content: "Detailed content about cloud security, tools, and best practices.",
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
      <p>Welcome to my technical blogs!</p>

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
                {/* Front */}
                <div className="blog-card-front">
                  <div className="blog-date">{formattedDate}</div>
                  <h2>{blog.title}</h2>
                  <p>{blog.summary}</p>
                </div>

                {/* Back */}
                <div className="blog-card-back">
                  <div className="blog-date">{formattedDate}</div>
                  <p>{blog.content}</p>
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
