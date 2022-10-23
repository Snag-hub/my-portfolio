import React from "react";

import "./Experience.css";

let ExperienceTitle = "< Experience />";
let stTitle = "< Software Developer />";
let sndTitle = "< Web Developer Intern />";

const Experience = () => {
  return (
    <>
      <div className="experience-content">
        <div className="experience">
          <h1>{ExperienceTitle}</h1>
        </div>
        <div className="experience-content-container">
          <div className="experience-content-item">
            <div className="experience-content-item-title">
              <h1>{stTitle}</h1>
            </div>
            <div className="experience-content-item-desc">
              <h3>Cinetech India Enterprises, Pune</h3>
              <h4>Sept 2022 - Present</h4>
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul>
                <li>
                  Design, develop, test and maintain software systems according
                  to specific requirements.
                </li>
                <li>
                  I collaborate productively with the product team to understand
                  requirements and business specifications around portfolio
                  management, analytics and risk.
                </li>
                <li>
                  I'm developing and presenting findings and solutions to
                  audiences including senior executives and stakeholders.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-content-item">
            <div className="experience-content-item-title">
              <h1>{sndTitle}</h1>
            </div>
            <div className="experience-content-item-desc">
              <h3>PAI College Of VEDA, Pune</h3>
              <h4>Sept 2021 - Jan 2022</h4>
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul>
                <li>
                  Develop database- driven applications using WordPress, PHP,
                  HTML, JavaScript, CSS, MySQL and SQL.
                </li>
                <li>Build APIs to aggregate local data</li>
                <li>Build new web-based features and interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
