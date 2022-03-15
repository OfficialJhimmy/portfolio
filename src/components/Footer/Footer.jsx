import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const getCurrentTime = `${dateState.getHours()} : ${dateState.getMinutes()} : ${dateState.getSeconds()}`;

  function displayMe(getCurrentTime) {
    if (getCurrentTime === " 6:00:00" && getCurrentTime <= "7:59:59") {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Gym Session 🏋️‍♂️</p>
        </>
      );
    } else if (getCurrentTime === "8:00:00" && getCurrentTime <= "15:59:59") {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Let's Code 👨‍💻</p>
        </>
      );
    } else if (getCurrentTime === "16:00:00" && getCurrentTime <= "18:59:59") {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Reading a Book 📖</p>
        </>
      );
    } else if (getCurrentTime === "19:00:00" && getCurrentTime <= "22:59:59") {
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
