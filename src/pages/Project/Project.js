import React from "react";

import "./Project.css";

let projectTitle = "< Projects />";
let projTitle1 = "< Online Examination System />";
let projTitle2 = "< B2S-Online Local E-Marketplace />";
let projTitle3 = "< Sorting Algorithm Visualizer />";

const Project = () => {
  return (
    <>
      <div className="project-container">
        <div className="project-content">
          <h1>{projectTitle}</h1>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-items">
            <h1>{projTitle1}</h1>
            <div className="project-content-container-item">
              <h2>"JavaScript"</h2>
              <h2>"C#"</h2>
              <h2>"Java"</h2>
              <h2>"TypeScript"</h2>
              <h2>"HTML"</h2>
              <h2>"CSS"</h2>
            </div>
          </div>
          <div className="project-content-container">
            <div className="project-content-container-items">
              <h1>{projTitle2}</h1>
              <div className="project-content-container-item">
                <h2>"JavaScript"</h2>
                <h2>"C#"</h2>
                <h2>"Java"</h2>
                <h2>"TypeScript"</h2>
                <h2>"HTML"</h2>
                <h2>"CSS"</h2>
              </div>
            </div>
          </div>
          <div className="project-content-container">
            <div className="project-content-container-items">
              <h1>{projTitle3}</h1>
              <div className="project-content-container-item">
                <h2>"JavaScript"</h2>
                <h2>"C#"</h2>
                <h2>"Java"</h2>
                <h2>"TypeScript"</h2>
                <h2>"HTML"</h2>
                <h2>"CSS"</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
