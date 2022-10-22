import React from "react";

import "./AboutMe.css";

const aboutme = "< About Me />";

const AboutMe = () => {
  return(
    <>
      <div  className="about-me-content">
        <div className="aboutMe">
          <h1>{aboutme}</h1>
        </div>
        <div className="aboutDesc">
          <p>
          Software Developer with expertise in design, develop, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
          </p>
          <br></br>
          <p>
          I am currently working as a <strong>Software Developer</strong> at <strong>Cinetech India Enterprises</strong> in Pune . I am Graduated from the University of Pune <strong>(Savitribai Phule Pune University)</strong> with a degree in Bachelors of Business Administration <strong>(Computer Applications)</strong> also known as BCA.
          </p>
          <br></br>
          <p>
          I am a self-motivated individual who is always looking for new challenges and opportunities. I am a hard-working individual who is always willing to learn new things. 
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;