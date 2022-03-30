import React from "react";
import "./Banner.css";
import MusicBnxn from "../Music/MusicBnxn";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Twitter from "../../assets/icons/twitter.png";
import Github from "../../assets/icons/github-icon.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";
import gmail from "../../assets/icons/gmail.png";

const Banner = () => {
  // const container = useRef(null);

  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: celebration,
  //   });
  // }, []);
  return (
    <>
      <div className="banner__wrapper">
        <div className="banner-info">
          <div className="tech-adverbs">
            <p className="first-child-ad">
              <span>“</span>DE<span>V</span>ELOPE<span>R,</span>
            </p>
            <br />
            <p>
              LO<span>G</span>ICAL THINKE <span>R,</span>
            </p>
            <br />
            <p className="last-child-ad">
              C<span>R</span>E <span>A</span>TI <span>V</span>E <span>.”</span>
            </p>
          </div>
          <div className="middle-description">
            <h1>
              FRONT-END
              <br />
              WEB DEVELOPER
            </h1>
            <a href="/Feyijimi Erinle CV.PDF" download className="resume-link">
              My Resume <AiOutlineCloudDownload className="resume-icon" />
            </a>
          </div>

          <div className="personality-adverbs">
            <p>
              <span>“</span> LIN<span>G</span>UIST<span>,</span>
            </p>
            <br />
            <p>
              <span>M</span>USIC LOVE <span>R,</span>
            </p>
            <br />
            <p>
              LIFESTYLE <span>.”</span>
            </p>
          </div>
        </div>

        <div className="banner__info-bottom">
          <div className="music__container">
            <MusicBnxn />
          </div>
          <div className="banner-socials">
            <a
              href="https://github.com/officialjhimmy"
              className="banner-social__icon"
            >
              <img src={Github} alt="Social icon" />
            </a>
            <a
              href="https://twitter.com/jhimmyofficial"
              className="banner-social__icon"
            >
              <img src={Twitter} alt="Social icon" />
            </a>
            <a
              href="https://linkedin.com/in/jhimmyofficial"
              className="banner-social__icon"
            >
              <img src={Linkedin} alt="Social icon" />
            </a>
            <a
              href="https://instagram.com/jhimmyofficial"
              className="banner-social__icon"
            >
              <img src={Instagram} alt="Social icon" />
            </a>
            <a
              href="mailto:erinlejhimmy@gmail.com"
              className="banner-social__icon"
            >
              <img src={gmail} alt="Social icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
