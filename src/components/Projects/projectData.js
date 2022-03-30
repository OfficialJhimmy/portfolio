import DASH from "../../assets/images/dash.webp";
import Ovatave from "../../assets/images/ovatave.webp";
import PSR from "../../assets/images/psr.webp";
import Manage from "../../assets/images/manage.webp";
import Portfolio from "../../assets/images/banner-port.webp";
import html from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css3.svg";
import js from "../../assets/icons/javascript.svg";
import React from "../../assets/icons/react.svg";
import redux from "../../assets/icons/redux.svg";
import reactrouter from "../../assets/icons/reactrouter.svg";
import styledcomp from "../../assets/icons/styledcomponents.svg";
import netlify from "../../assets/icons/netlify.svg";
import swiper from "../../assets/icons/swiper.svg";
import gsap from "../../assets/icons/greensock.svg";
import firebase from "../../assets/icons/firebase.svg";

export const projectData = [
  {
    title: "Dash Language School",
    description:
      "An Online platform that teaches people across all ages, groups, careers about educational, cultural and linguistic ways of some Deutsch and/or French-speaking countries",
    tools: [
      "ReactJs",
      "Redux",
      "Styled Components",
      "GSAP",
      "React Router",
      "Netlify",
    ],
    icons: [React, redux, styledcomp, gsap, reactrouter, netlify],
    live: "https://dashlanguageschool.com",
    github: "https://github.com/OfficialJhimmy/Dash-Language-Place",
    img: DASH,
  },
  {
    title: "Ovatave",
    description:
      "Talent Management & Brand Development for the next generation of Singers, Models, Athletes, and Digital Entrepreneurs.",
    tools: ["ReactJs", "GSAP", "Netlify"],
    icons: [React, gsap, netlify],
    live: "http://ovatave.netlify.app/",
    github: "https://github.com/OfficialJhimmy/Ovatave",
    img: Ovatave,
  },
  {
    title: "Property Sales Reality",
    description: "A Real-Estate Company Based in Nigeria.",
    tools: ["ReactJs", "Redux", "Firebase", "React Router", "Netlify"],
    icons: [React, redux, firebase, reactrouter, netlify],
    live: "http://propertysalesreality.netlify.app/",
    github: "https://github.com/OfficialJhimmy/Property-Sales-Reality",
    img: PSR,
  },
  {
    title: "My Portfolio",
    description: "My Portfolio displaying a catalogue of projects done",
    tools: [
      "ReactJs",
      "GSAP",
      "Swiper Js",
      "React Router",
      "Locomotive Scroll",
    ],
    icons: [React, gsap, swiper, reactrouter],
    live: "http://portfolio-jhimmy.netlify.app",
    github: "https://github.com/OfficialJhimmy/portfolio",
    img: Portfolio,
  },
  {
    title: "Manage",
    description: "A Front-End Mentor Challenge!",
    tools: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    icons: [html, css, js, netlify],
    live: "http://manage-front.netlify.app/",
    github: "https://github.com/OfficialJhimmy/manage-landing-page",
    img: Manage,
  },
];
