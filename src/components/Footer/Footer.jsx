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
          <p>Sleeping ๐ด</p>
        </>
      );
    } else if (getHours < 7) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Morning Routine ๐๏ธโโ๏ธ</p>
        </>
      );
    } else if (getHours < 10) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Breakfast ๐</p>
        </>
      );
    } else if (getHours < 12) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Time to Code ๐จโ๐ป</p>
        </>
      );
    } else if (getHours < 14) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Lunch Time ๐</p>
        </>
      );
    } else if (getHours < 16) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Let's Code ๐จโ๐ป</p>
        </>
      );
    } else if (getHours < 19) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Reading a Book ๐</p>
        </>
      );
    } else if (getHours < 23) {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Talking to Family ๐จโ๐ฉโ๐งโ๐ฆ</p>
        </>
      );
    } else {
      return (
        <>
          <p>{getCurrentTime}:</p>
          <p>Bed Time ๐ด</p>
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
          <span>6.455027ยฐN 3.384082ยฐE</span>
        </div>
        <div className="footer-children-time">{displayMe(getCurrentTime)}</div>
      </footer>
    </>
  );
}

export default Footer;
