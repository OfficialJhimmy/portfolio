import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const getCurrentTime = `${dateState.getHours()}:${dateState.getMinutes()}:${dateState.getSeconds()}`;

  const getHours = new Date().getHours();

  function displayMe(getCurrentTime) {
    if (getHours < 5) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Sleeping 😴</p>
        </>
      );
    } else if (getHours < 8) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Morning Routine 🏋️‍♂️</p>
        </>
      );
    } else if (getHours < 16) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Let's Code 👨‍💻</p>
        </>
      );
    } else if (getHours < 19) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Reading a Book 📖</p>
        </>
      );
    } else if (getHours < 23) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Talking to Family 👨‍👩‍👧‍👦</p>
        </>
      );
    } else {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Bed Time 😴</p>
        </>
      );
    }
  }

  return (
    <>
      <footer>
        <div className="footer-children-copyright">
          <p>&#169;2022. All rights reserved JhimmyOfficial.</p>
        </div>
        <div className="footer-children-location">
          <span>6.455027°N 3.384082°E</span>
        </div>
        <div className="footer-children-time">{displayMe(getCurrentTime)}</div>
      </footer>
    </>
  );
}

export default Footer;
