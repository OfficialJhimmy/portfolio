import React, { useEffect, useRef } from "react";
import MenuManager from "../../components/Menu/MenuManager/index";
import Menu from "../../components/Menu/index";
import Lottie from "lottie-web";
import error from "../../assets/lottie/error404.json";
import "./index.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Error404() {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: error,
    });
  }, []);
  return (
    <div className="error">
      <div className="nav__wrapper">
        <Link to="/">
          <h3>JhimmyOfficial</h3>
        </Link>
        <MenuManager>
          <Menu />
        </MenuManager>
      </div>

      <div className="error__container">
        <div ref={container} className="error__wrapper"></div>
        <div className="error__info">
          <h2>
            Opps! Wrong Direction, guess you wanted to navigate somewhere else
            right? 😅
          </h2>
          <p className="error__p">Well, it happens to everyone 😀</p>
          <Link to="/" className="error__link">
            <p>Back to Home 🏹</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;
