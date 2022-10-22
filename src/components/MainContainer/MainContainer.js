import React from "react";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
// import Skills from "../Skills/Skills";
// import Experience from "../Experience/Experience";
// import Project from "../Project/Project";
// import Contact from "../Contact/Contact";

import "./MainContainer.css";

const MainContainer = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="main-container">
          <div className="main-container-content">
            <AboutMe />
          </div>
          <div className="main-container-navigations">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
