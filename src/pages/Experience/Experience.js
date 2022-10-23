import React from "react";

import "./Experience.css";

let ExperienceTitle = "< Experience />";

const data = [
  {
    ExperienceTitle: "< Software Developer />",
    Company: "Cinetech India Enterprises, Pune",
    Duration: "Sept 2022 - Present",
    Responsibilities: [
      "Design, develop, test and maintain software systems according to specific requirements.",
      "I collaborate productively with the product team to understand requirements and business specifications around portfolio management, analytics and risk.",
      "I'm developing and presenting findings and solutions to audiences including senior executives and stakeholders.",
    ],
  },
  {
    ExperienceTitle: "< Web Developer Intern />",
    Company: "PAI College Of VEDA, Pune",
    Duration: "Sept 2021 - Jan 2022",
    Responsibilities: [
      "Develop database- driven applications using WordPress, PHP, HTML, JavaScript, CSS, MySQL and SQL.",
      "Build APIs to aggregate local data",
      "Build new web-based features and interfaces",
    ],
  },
];

const Experience = () => {
  return (
    <>
      <div className="experience-container">
        <div className="experience-content">
          <h1>{ExperienceTitle}</h1>
        </div>
        <div className="experience-content-container">
          {data.map((item, i) => (
            <div className="experience-content-container-items">
              <h1>{item.ExperienceTitle}</h1>
              <div className="experience-content-container-item">
                <h2>{item.Company}</h2>
                <h3>{item.Duration}</h3>
                <div className="experience-content-container-item-responsibilities">
                  {item.Responsibilities.map((item, i) => (
                    <ul>
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

    // <>
    //   <div className="experience-content">
    //     <div className="experience">
    //       <h1>{ExperienceTitle}</h1>
    //     </div>
    //     <div className="experience-content-container">
    //       <div className="experience-content-item">
    //         {data.map((item, i) => (
    //           <div className="experience-content-item-title">
    //             <h1>{item.ExperienceTitle}</h1>
    //               <h3>{item.Company}</h3>
    //               <h4>{item.Duration}</h4>
    //               <p>
    //                 <strong>Responsibilities:</strong>
    //               </p>
    //               <ul>
    //                 {item.Responsibilities.map((item, i) => (
    //                   <li>{item}</li>
    //                 ))}
    //               </ul>
    //             </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Experience;
