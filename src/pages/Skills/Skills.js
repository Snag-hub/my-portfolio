import React from "react";

import "./Skills.css";

let skillTitle = "< Skills />";
const data = [
  {
    skillsTitle: "< Programming Languages />",
    Languages: ["JavaScript", "C#", "Java", "TypeScript", "HTML", "CSS"],
  },
  {
    skillsTitle: "< Databases & Tools />",
    Languages: ["MySQL", "SQL Server", "SQL", "MongoDB"]
  },
  {
    skillsTitle: "< Frameworks & Libraries />",
    Languages: [
      "React","Node","TailWind","Bootstrap","Material UI",".NET","ASP.NET"
    ]
  },
  {
    skillsTitle: "< Tools and Platforms />",
    Languages: ["Git", "GitHub", "WordPress", "Heroku", "Firebase"],
  },
];

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="skills-content">
          <h1>{skillTitle}</h1>
        </div>
        <div className="skills-content-container">
          {data.map((item, i) => (
            <div className="skills-content-container-items">
              <h1>{item.skillsTitle}</h1>
              <div className="skills-content-container-item">
                {item.Languages.map((item, i) => (
                  <h2>{item}</h2>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
