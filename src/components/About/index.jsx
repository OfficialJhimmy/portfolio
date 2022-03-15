import React, { useEffect, useRef } from "react";
import TimeQuotes from "./TimeQuotes";
import NGA from "../../assets/icons/nigeria.png";
import ENG from "../../assets/icons/united-kingdom.png";
import GER from "../../assets/icons/germany.png";
import ESP from "../../assets/icons/spain.png";
import "./index.css";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
function About() {
  const { ref: sectionRef, inView: isVisible } = useInView();
  const { ref: section2Ref, inView: isVisible2 } = useInView();
  const { ref: section3Ref, inView: isVisible3 } = useInView();

  gsap.to(sectionRef, {
    duration: 1,
    opacity: 1,
    y: -60,
    ease: "power4.out",
    stagger: {
      amount: 0.3,
    },
  });

  return (
    <>
      <div className="about--top">
        <TimeQuotes />
      </div>
      <div className="about-description">
        <p className="heading-about" ref={sectionRef}>
          Hello World 🌏, I'm a{" "}
          <span>
            Lagos-based
            <img src={NGA} alt="Nigeria's Flag" />
          </span>{" "}
          Front-End Web Developer. I use Front-End tools like REACT.JS to create
          pixel perfect designs with cross browser compatible and responsive
          user interfaces, that are scalable, interactive and easy to maintain.
        </p>

        <p className="heading-about" ref={section2Ref}>
          I'm a Logical and results-driven developer dedicated to building Web
          Solutions for various business objectives.
        </p>

        <p className="heading-about" ref={section3Ref}>
          Fun Facts😎: I Speak 4 different languages : {"  "}
          <span>
            English
            <img src={ENG} alt="Great Britian's Flag" />
          </span>
          ,{" "}
          <span>
            German
            <img src={GER} alt="Germany's Flag" />
          </span>
          ,{" "}
          <span>
            Spanish <img src={ESP} alt="Spain's Flag" />
          </span>
          <span>
            and{" "}
            <span>
              {" "}
              Yoruba (my mother tongue)
              <img src={NGA} alt="Nigeria's Flag" />
            </span>
          </span>
        </p>
      </div>
    </>
  );
}

export default About;
