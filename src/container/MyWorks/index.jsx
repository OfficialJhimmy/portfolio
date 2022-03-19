import React from "react";
import "./index.css";
import MenuManager from "../../components/Menu/MenuManager/index";
import Menu from "../../components/Menu/index";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./index.css";

function MyWorks() {
  const { ref: sectionRef, inView: isVisible } = useInView();
  const { ref: sectionBottomRef, inView: isVisibleBottom } = useInView();
  return (
    <>
      <div className="nav__wrapper">
        <Link to="/">
          <h3>JhimmyOfficial</h3>
        </Link>
        <MenuManager>
          <Menu />
        </MenuManager>
      </div>

      <div
        ref={sectionRef}
        className={`${isVisible ? "change__section--color" : ""}`}
      >
        <Projects />
      </div>
      <div
        ref={sectionBottomRef}
        className={`double__section ${
          isVisibleBottom ? "change__section--color-2" : ""
        }`}
      >
        <Contact />
        <Social />
      </div>

      <Footer />
    </>
  );
}

export default MyWorks;
