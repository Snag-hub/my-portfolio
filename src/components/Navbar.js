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
                <a href="/">?Skills</a>
              </div>
            </li>
            <li>
              <div className="nav-items">
                <a href="/">?Experience</a>
              </div>
            </li>
            <li>
              <div className="nav-items">
                <a href="/">?Projects</a>
              </div>
            </li>
            <li>
              <div className="nav-items">
                <a href="/">?Contacts</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
