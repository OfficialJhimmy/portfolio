import React from "react";
import MorningQuotes from "../Quotes/MorningQuotes";
import NightQuotes from "../Quotes/NightQuotes";
import NoonQuotes from "../Quotes/NoonQuotes";

function TimeQuotes() {
  const date = new Date();

  const getCurrentTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

  const getCurrentDate = date.toDateString();

  return (
    <>
      <div className="time__quotes--container">
        {getCurrentTime === "6:00:00" || getCurrentTime <= "11:59:59" ? (
          <MorningQuotes
            getCurrentDate={getCurrentDate}
            getCurrentTime={getCurrentTime}
          />
        ) : getCurrentTime === "12:00:00" || getCurrentTime <= "17:59:59" ? (
          <NoonQuotes
            getCurrentDate={getCurrentDate}
            getCurrentTime={getCurrentTime}
          />
        ) : (
          <NightQuotes
            getCurrentDate={getCurrentDate}
            getCurrentTime={getCurrentTime}
          />
        )}
      </div>
    </>
  );
}

export default TimeQuotes;
