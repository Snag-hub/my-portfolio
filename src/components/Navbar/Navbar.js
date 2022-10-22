import React from "react";


import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-links">
          <ul>
          <li>
              <div className="nav-items">
                <a href="/" className="skillBtn">?Skills</a>
              </div>
            </li>
            <li>
              <div className="nav-items">
                <a href="/" className="experienceBtn">?Experience</a>
              </div>
            </li>
            <li>
              <div className="nav-items">
                <a href="/" className="projectBtn">?Projects</a>
              </div>
            </li>
            <li>
              <div className="nav-items">
                <a href="/" className="contactBtn">?Contacts</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
