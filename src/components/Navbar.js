import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from "../imgs/bs_logo.png";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false); 
  }, [location]);

  return (
    <nav className={`navbar ${expandNavbar ? "expanded" : ""}`}>
      <div className="navbar-container">
        <div className="logo-section">
          <Link to="/">
            <img src={Logo} alt="BS_LOGO" className="nav-logo" />
          </Link>
        </div>

        <div className="nav-elements">
          <div className="toggleButton">
            <button onClick={() => setExpandNavbar(prev => !prev)}>
              <ReorderIcon />
            </button>
          </div>

          <div className={`links ${expandNavbar ? "open" : ""}`}>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>HOME</Link>
            <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>PROJECTS</Link>
            <Link to="/experience" className={location.pathname === "/experience" ? "active" : ""}>EXPERIENCE</Link>
            <Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""}>BLOGS</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;