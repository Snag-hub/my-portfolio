import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <h1>Snag.dev</h1>
        </div>
        <div className="resume-button">
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
