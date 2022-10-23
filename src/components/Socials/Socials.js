import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Socials.css";
let youtube= "  YouTube";
let LinkedIn = "  LinkedIn";
let Twitter = "  Twitter";
let Instagram = "  Instagram";
let Github = "  Github";

const Socials = () => {
  return (
    <>
      <div className="socials-container">
        <div className="socials-content">
          <div className="socials-links">
            <ul>
              <li>
                <div className="socials-item">
                  <a href="https://www.linkedin.com/in/syednadeemhussain/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    {LinkedIn}
                  </a>
                </div>
              </li>
              <li>
                <div className="socials-item">
                  <a href="https://twitter.com/therealgeelani" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                    {Twitter}
                  </a>
                </div>
              </li>
              <li>
                <div className="socials-item">
                  <a href="https://www.instagram.com/anonymous.programmer/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                    {Instagram}
                  </a>
                </div>
              </li>
              <li>
                <div className="socials-item">
                  <a href="https://github.com/Snag-hub" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    {Github}
                  </a>
                </div>
              </li>
              <li>
                <div className="socials-item">
                  <a href="https://www.youtube.com/channel/UChTEvrP_8_0MjAeTnq3vbzw" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                    {youtube}
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
