import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-links">
          <ul>
            <CustomLink to="/skills">?Skills</CustomLink>
            <CustomLink to="/experience">?Experience</CustomLink>
            <CustomLink to="/projects">?Projects</CustomLink>
            <CustomLink to="/contact">?Contact</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  // const path = "window.location.pathname";
  return (
    <li >
      <div className="nav-items">
        <Link to={to} {...props}>
        {" "}
        {children}{" "}
        </Link>
      </div>
    </li>
  );
}

export default Navbar;
