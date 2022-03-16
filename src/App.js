import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import MyWorks from "./container/MyWorks/index";
import Error404 from "./container/Error/Error404";
import Scrolltotop from "./components/Scroll-to-top/index.jsx";
import { ScrollFromBottom } from "./components/Scroll-to-top/ScrollFromBottom.jsx";
import gsap from "gsap";
import "./index.css";

function App() {
  let cursor = useRef(null);
  let posX1 = useRef(null);
  let posY1 = useRef(null);
  let mouseX1 = useRef(null);
  let mouseY1 = useRef(null);

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();

  useEffect(() => {
    let posX = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      },
    });
    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
    tl2.from(
      cursor,
      {
        duration: 1.5,
        delay: 2,
        opacity: 0,
      },
      "-=1"
    );
  });

  const load = gsap.timeline({
    paused: "true",
  });
  let loader = useRef(null);
  let progress = useRef(null);
  let percent = useRef(null);
  let bar = useRef(null);
  let barc = useRef(null);

  useEffect(() => {
    load.to([percent, bar], {
      // duration: 0.2,
      duration: 2,
      opacity: 0,
      zIndex: -1,
    });
    load.to(progress, {
      duration: 0.8,
      width: "0%",
    });
    load.to(loader, {
      visibility: "hidden",
      zIndex: -1,
    });
  });

  var id;
  var width1 = 1;

  function loading() {
    id = setInterval(frame, 20);
  }
  function frame() {
    if (width1 >= 100) {
      clearInterval(id);
      load.play();
    } else {
      width1++;
      document.getElementById("barc").style.width = width1 + "%";
      document.getElementById("percent").innerHTML = width1 + "%";
    }
  }
  window.addEventListener("load", (e) => {
    loading();
  });
  return (
    <div className="App">
      <Router>
        <div className="loader" ref={(el) => (loader = el)}>
          <div className="progress" ref={(el) => (progress = el)}>
            <div id="percent" ref={(el) => (percent = el)}>
              1%
            </div>
            <div id="bar" ref={(el) => (bar = el)}>
              <div id="barc" ref={(el) => (barc = el)}></div>
            </div>
          </div>
        </div>
        <Scrolltotop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<MyWorks />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
        <div className="cursor-follower" ref={(el) => (cursor = el)}></div>
        <ScrollFromBottom />
      </Router>
    </div>
  );
}

export default App;
