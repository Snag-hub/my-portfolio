import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import "./Socials.css";

const Socials = () => {
  return (
    <>
      <div className="socials-container">
        <div className="socials-content">
          <div className="socials-links">
            <ul>
              <li>
                <div className="socials-item">
                  <a href="/">
                    LinkedIn
                    <FontAwesomeIcon icon="faLinkedinIn" />
                  </a>
                </div>
                <div className="socials-item">
                  <a href="/">
                    Twitter
                    <FontAwesomeIcon icon="faTwitter" />
                  </a>
                </div>
                <div className="socials-item">
                  <a href="/">
                    Instagram
                    <FontAwesomeIcon icon="faInstagram" />
                  </a>
                </div>
                <div className="socials-item">
                  <a href="/">
                    Github
                    <FontAwesomeIcon icon="faGithub" />
                  </a>
                </div>
                <div className="socials-item">
                  <a href="/">
                    YouTube
                    <FontAwesomeIcon icon="faYoutube" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
