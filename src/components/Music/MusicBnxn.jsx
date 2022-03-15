import React, { useRef, useState } from "react";
import BNXN from "../../assets/audio/BNXN.mp3";
import Sound from "../../assets/icons/sound-on.png";
import "./index.css";

const MusicBnxn = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <div className="music-box" onClick={() => handleClick()}>
      <div className="music-box__wrapper">
        <img src={Sound} alt="Music" className="music-icon" />
      </div>

      <audio src={BNXN} ref={ref} loop />
    </div>
  );
};

export default MusicBnxn;
