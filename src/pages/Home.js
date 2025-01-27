import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello. The Name is Thumbiko AKA Biko </h2>
        
        <div className="prompt">
          <p>A developer trying to be ExtraOrdinary and not just Ordinary.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,PostgreSQL, 
              MySQL, MongoDB, 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, </span>
          </li>


          <li className="item">
            <h2>Web Development</h2>
            <span>HTML, CSS, JavaScript, Bootstrap, jQuery</span>
          </li>


          <li className="item">
            <h2>Security & Cryptography</h2>
            <span>Proficiency in secure coding practices and cryptographic algorithms</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;