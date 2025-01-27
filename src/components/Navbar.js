import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {


  const [ fix, setFix ] = useState(false)
  function setFixed(){
    if (window.scrollY >=392){
      setFix(true)
    } else{
      setFix(false)
    }
  }

  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();


  

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      {/* Logo on the left */}
      <div className="logo">
      <img src="/imgs/bs_logo.png" alt="Logo" />

      </div>

      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/whoami"> WhoAmI </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
