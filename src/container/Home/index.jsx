import React from "react";
import MenuManager from "../../components/Menu/MenuManager/index";
import Banner from "../../components/Banner/Banner";
import Menu from "../../components/Menu/index";
import { Link } from "react-router-dom";
import "./index.css";
import About from "../../components/About/index";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";

const Home = () => {
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

      <Banner />
      <section>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Social />
      </section>
      <Footer />
    </>
  );
};
export default Home;
