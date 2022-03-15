import React from "react";
import "./Social.css";
import Twitter from "../../assets/icons/twitter.png";
import Github from "../../assets/icons/github-icon.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";
import Medium from "../../assets/icons/medium.png";

function Social() {
  return (
    <div>
      <div className="social__wrapper">
        <h2>Let's Stay Connected 💙</h2>
        <div className="social__container">
          <p>Don't be a stranger, Connect with me online 😊</p>
          <div className="social-media">
            <a
              href="https://github.com/officialjhimmy"
              className="social-media__links"
            >
              <img src={Github} alt="Social icon" /> <span>GH</span>
            </a>
            <a
              href="https://twitter.com/jhimmyofficial"
              className="social-media__links"
            >
              <img src={Twitter} alt="Social icon" /> <span>TW</span>
            </a>
            <a
              href="https://linkedin.com/in/jhimmyofficial"
              className="social-media__links"
            >
              <img src={Linkedin} alt="Social icon" /> <span>LD</span>
            </a>
            <a
              href="https://instagram.com/jhimmyofficial"
              className="social-media__links"
            >
              <img src={Instagram} alt="Social icon" /> <span>IG</span>
            </a>
            <a
              href="https://hashnode.com/@jhimmyofficial"
              className="social-media__links"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#2962FF"
              >
                <title>Hashnode</title>
                <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
              </svg>
              <span>HN</span>
            </a>
            <a
              href="https://medium.com/@jhimmyofficial"
              className="social-media__links"
            >
              <img src={Medium} alt="Social icon" /> <span>MD</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
