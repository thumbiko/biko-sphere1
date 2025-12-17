import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from "../imgs/bs_logo.png";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false); // Close navbar when route changes
  }, [location]);

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Hamburger button */}
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar(prev => !prev)}>
          <ReorderIcon />
        </button>
      </div>

      {/* Links */}
      <div className={`links ${expandNavbar ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/blogs">Blogs</Link>  {/* new link */}
      </div>
    </nav>
  );
}

export default Navbar;
