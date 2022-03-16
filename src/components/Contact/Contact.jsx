import React, { useEffect, useRef } from "react";
import { FcCellPhone } from "react-icons/fc";
import Lottie from "lottie-web";
import paperplane from "../../assets/lottie/paper-plane.json";
import "./Contact.css";

function Contact() {
  const wrapper = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: wrapper.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: paperplane,
    });
  }, []);

  useEffect(() => {});
  return (
    <>
      <div className="contact__wrapper">
        <h2>Got a Job for me?</h2>
        <div className="contact__container">
          <p>
            Hello there 👋, Thank you for getting here. I'm currently looking to
            join a team of creatives. If you feel I've got a shot, I'm currently
            accesible via my{" "}
            <a href="mailto:erinlejhimmy@gmail.com" className="contact__link">
              Mailing Address 💌
            </a>
            or a{" "}
            <a href="tel:+2349057492540" className="contact__link">
              {" "}
              Phone Call <FcCellPhone className="contact-icon" />
            </a>{" "}
            will do{" "}
          </p>
        </div>
        <div className="lottie__wrapper" ref={wrapper}></div>
      </div>
    </>
  );
}

export default Contact;
