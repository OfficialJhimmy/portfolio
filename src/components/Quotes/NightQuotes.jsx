import React, { useEffect, useState } from "react";
import axios from "axios";
import Moon from "../../assets/icons/moon.png";
import "./index.css";

function NightQuotes({ getCurrentDate, getCurrentTime }) {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchNewAdvice();
  });

  const fetchNewAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    fetchNewAdvice();
  };
  return (
    <>
      <div className="time__quotes--box">
        <div className="time__quotes--top">
          <div className="time__quotes-time">
            <p>{getCurrentTime}</p>
          </div>
          <div className="time__quotes-icon">
            <img src={Moon} alt="Night Fall" />
          </div>
        </div>

        <div className="time__quotes--bottom">
          <p>{advice}</p>
        </div>
        <div className="quote-cta">
          <p>{getCurrentDate}</p>
          <button onClick={handleClick}>Advice Me 😊</button>
        </div>
      </div>
    </>
  );
}

export default NightQuotes;
