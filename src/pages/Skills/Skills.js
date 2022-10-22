import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="skills-content">
          <h1>Skills</h1>
        </div>
        <div className="skills-content-container">
          <div className="skills-content-container-items">
            <h1>Front-End</h1>
            <div className="skills-content-container-item">
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>JavaScript</h2>
              <h2>React</h2>
              <h2>BootStrap</h2>
              <h2>TailWind</h2>
            </div>
          </div>
          <div className="skills-content-container-items">
            <h1>Back-End</h1>
            <div className="skills-content-container-item">
              <h2>Node.js</h2>
              <h2>Express.js</h2>
              <h2>MySQL</h2>
              <h2>MongoDB</h2>
              <h2>GraphQL</h2>
              <h2>C#</h2>
              <h2>Java</h2>
            </div>
          </div>
          <div className="skills-content-container-items">
            <h1>Tools</h1>
            <div className="skills-content-container-item">
              <h2>Git</h2>
              <h2>GitHub</h2>
              <h2>VS Code</h2>
              <h2>Postman</h2>
              <h2>Heroku</h2>
              <h2>Netlify</h2>
              </div>
        </div>
          </div>
      </div>
    </>
  );
};

export default Skills;
