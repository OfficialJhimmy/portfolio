import React from "react";
import MorningQuotes from "../Quotes/MorningQuotes";
import NightQuotes from "../Quotes/NightQuotes";
import NoonQuotes from "../Quotes/NoonQuotes";

function TimeQuotes() {
  const date = new Date();

  const getCurrentTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

  const getCurrentDate = date.toDateString();
  const getHours = new Date().getHours();

  function displayMe() {
    if (getHours < 12) {
      return (
        <>
          <MorningQuotes
            getCurrentDate={getCurrentDate}
            getCurrentTime={getCurrentTime}
          />
        </>
      );
    } else if (getHours < 19) {
      return (
        <>
          <NoonQuotes
            getCurrentDate={getCurrentDate}
            getCurrentTime={getCurrentTime}
          />
        </>
      );
    } else {
      return (
        <NightQuotes
          getCurrentDate={getCurrentDate}
          getCurrentTime={getCurrentTime}
        />
      );
    }
  }
  return (
    <>
      <div className="time__quotes--container">{displayMe()}</div>
    </>
  );
}

export default TimeQuotes;
