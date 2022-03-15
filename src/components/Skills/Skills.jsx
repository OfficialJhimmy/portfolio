import React from "react";
import SkillsCarousel from "./SkillsCarousel";
import "./Skills.css";
import SkillsSvg from "./SkillsSvg";
function Skills() {
  return (
    <>
      <div className="skills__container">
        <h2>Skills & Tools</h2>
        <div className="skills__wrapper">
          <div className="skills__box skills-left">
            <SkillsCarousel />
          </div>
          <div className="skills__box">
            <SkillsSvg />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
