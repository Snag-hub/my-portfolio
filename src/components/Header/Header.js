import React from "react";
import { Link } from "react-router-dom";

 
import "./Header.css";


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <h1>
            <Link to="/">
            Snag.dev
            </Link>
            </h1>
        </div>
        <div className="resume-button">
          <button >Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
