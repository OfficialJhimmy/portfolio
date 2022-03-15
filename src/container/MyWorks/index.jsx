import React from "react";
import "./index.css";
import MenuManager from "../../components/Menu/MenuManager/index";
import Menu from "../../components/Menu/index";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";

function MyWorks() {
  return (
    <>
      <div className="nav__wrapper">
        <h3>JhimmyOfficial</h3>
        <MenuManager>
          <Menu />
        </MenuManager>
      </div>
      <section>
        <Projects />
        <Contact />
        <Social />
        <Footer />
      </section>
    </>
  );
}

export default MyWorks;
