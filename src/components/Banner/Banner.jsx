import React, { useEffect, useRef } from "react";
import "./Banner.css";
import Lottie from "lottie-web";
import celebration from "../../assets/lottie/celebration.json";
import MusicBnxn from "../Music/MusicBnxn";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Twitter from "../../assets/icons/twitter.png";
import Github from "../../assets/icons/github-icon.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";

const Banner = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: celebration,
    });
  }, []);
  return (
    <>
      <div className="banner__wrapper">
        <div className="banner__description">
          <div className="banner-info">
            <span>Hi there👋, I'm</span>
            <h1 className="glitch-text" data-text="JHIMMY OFFICIAL">
              JHIMMYOFFICIAL
            </h1>
            <p>
              A Self-Taught Front-End Web Developer based in Lagos, Nigeria. I
              use Front-end tools to create pixel perfect designs that are
              scalable, interactive and easy to maintain.
            </p>
            <a href="/Feyijimi Erinle CV.PDF" download className="resume-link">
              My Resume <AiOutlineCloudDownload className="resume-icon" />
            </a>
          </div>

          <div className="lottie__container" ref={container}></div>
        </div>

        <div className="banner__info-bottom">
          <div className="music__container">
            <MusicBnxn />
          </div>
          <div className="banner-socials">
            <a
              href="www.github.com/officialjhimmy"
              className="banner-social__icon"
            >
              <img src={Github} alt="Social icon" /> <span>GH</span>
            </a>
            <a
              href="www.twitter.com/jhimmyofficial"
              className="banner-social__icon"
            >
              <img src={Twitter} alt="Social icon" /> <span>TW</span>
            </a>
            <a
              href="www.linkedin.com/jhimmyofficial"
              className="banner-social__icon"
            >
              <img src={Linkedin} alt="Social icon" /> <span>LD</span>
            </a>
            <a
              href="www.instagram.com/jhimmyofficial"
              className="banner-social__icon"
            >
              <img src={Instagram} alt="Social icon" /> <span>IG</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
