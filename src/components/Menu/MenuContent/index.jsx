import React, { useContext } from "react";
import { MenuContext } from "../MenuManager/index";
import { Twitter, Instagram, Linkedin, GitHub } from "react-feather";
import cn from "classnames";

import "./index.css";
import { Link } from "react-router-dom";

const internalLinks = [
  {
    url: "/",
    component: <span>Home</span>,
  },
  {
    url: "/projects",
    component: <span>My Projects</span>,
  },
];

const externalLinks = [
  {
    url: "https://github.com/officialjhimmy",
    component: <GitHub />,
  },
  {
    url: "https://twitter.com/jhimmyofficial",
    component: <Twitter />,
  },
  {
    url: "https://linkedin.com/in/jhimmyofficial",
    component: <Linkedin />,
  },
  {
    url: "https://instagram.com/jhimmyofficial",
    component: <Instagram />,
  },
];

function MenuContent() {
  const { open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.component}</Link>
                {/* <img src={link.img} alt="Navigation" /> */}
              </li>
            ))}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
