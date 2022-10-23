import React from "react";

import "./Project.css";

let projectTitle = "< Projects />";

const data = [
  {
    title: "Online Examination System",
    duration: "Oct 2021 - Jan 2022",
    description: [
      "This system's front-end is based on HTML5, CSS3, JavaScript, and Bootstrap 4 and the back-end is based on Core PHP and MySQL.",
      "This system is used to conduct online examinations for students.",
      "This system provides MCQ-based exams and quizzes.",
      "I built this system to make exams easy to manage and make an organization's data centralized.",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "SQL",
      "Xampp",
    ],
    githubLink: "https://github.com/Snag-hub/Online-examination-system",
    demoLink: "",
  },
  {
    title: "B2S-Online Local E-Marketplace",
    duration: "Feb 2022 - Jun 2022",
    description: [
      "This system's front-end is based on HTML5, CSS3, JavaScript, and Bootstrap 4 and the back-end is based on Core PHP and MySQL.",
      "This is a classified ads website, where we can post ads and view ads to sell or buy things online.",
      "This system is built to give you the independcy to view and buy anything from your local area.",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "SQL",
      "Xampp",
    ],
    githubLink: "https://github.com/Snag-hub/B2S-Local-E-Marketplace",
    demoLink: "",
  },
  {
    title: "Sorting Algorithm Visualizer",
    duration: "Jul 2022 - Sep 2022",
    description: [
      "This Project is built by using JavaScript.",
      "The whole aim of the project was to show my understanding of Front-end development and JavaScript.",
      "This project is built to visualize the working of different sorting algorithms.",
      "While working on this project I learned a lot about the JavaScript and JS Animations.",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Snag-hub/Sorting-Visualizer",
    demoLink: "https://snag-hub.github.io/Sorting-Visualizer/",
  },
];

const Project = () => {
  return (
    <>
      <div className="project-container">
        <div className="project-content">
          <h1>{projectTitle}</h1>
        </div>
        <div className="project-content-container">
          {data.map((item, i) => (
            <div className="project-content-container-items">
              <h1>{item.title}</h1>
              <div className="project-content-container-item">
                <h2>{item.duration}</h2>
                <div className="project-content-container-item-description">
                  {item.description.map((item, i) => (
                    <ul>
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>
                <div className="project-content-container-item-techstack">
                  <h4>Tech Stack</h4>
                  <div className="project-content-container-item-techstack-items">
                    {item.techStack.map((item, i) => (
                        <p>{item},</p>
                    ))}
                  </div>
                </div>
                <div className="project-content-container-item-links">
                  <a href={item.githubLink} target="_blank" rel="noreferrer">
                    <button className="project-content-container-item-links-button">
                      Github
                    </button>
                  </a>
                  <a href={item.demoLink} target="_blank" rel="noreferrer">
                    <button className="project-content-container-item-links-button">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
