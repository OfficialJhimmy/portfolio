import React from "react";
import "./Projects.css";
import { projectData } from "./projectData";
import { GrGithub } from "react-icons/gr";
import { BsLink45Deg } from "react-icons/bs";

function Projects() {
  return (
    <div className="project__container">
      <h2 className="heading-project">Selected Projects</h2>

      <div className="project__wrapper">
        {projectData.map((pro, index) => (
          <div className="project__box" key={index}>
            <div className="project__img">
              <img src={pro.img} alt="My Project" />
            </div>

            <div className="project__description">
              <div className="project__info">
                <h2>{pro.title}</h2>
                <p>{pro.description}</p>
              </div>
              <div className="project__tools">
                {pro.tools.map((tool, index) => (
                  <span key={index}>{tool}</span>
                ))}
              </div>
              <div className="project__links">
                <a href={pro.live} target="_blank" rel="noreferrer">
                  <BsLink45Deg className="project-icon" /> Live
                </a>
                <a href={pro.github} target="_blank" rel="noreferrer">
                  <GrGithub className="project-icon" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
