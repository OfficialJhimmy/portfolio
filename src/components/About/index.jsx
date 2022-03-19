import React, { useEffect } from "react";
import TimeQuotes from "./TimeQuotes";
import NGA from "../../assets/icons/nigeria-flag-waving-xs.png";
import GER from "../../assets/icons/germany-xs.png";
import UK from "../../assets/icons/uk-xs.png";
import ESP from "../../assets/icons/spain-xs.png";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about-section">
      <div className="about--top">
        <TimeQuotes />
      </div>
      <div className="about-description">
        <p
          className="heading-about"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Hello World 🌎, I'm JhimmyOfficial, a Self-Taught Front-End Developer
          based in{" "}
          <span className="inner-span__descrption">
            Lagos,Nigeria <img src={NGA} alt="Flag of Nigeria" />
          </span>
          . I use Software Languages and Tool to turn ideas into real-world
          products. That's the major reason why i enjoy being a Developer.
        </p>

        <p
          className="heading-about"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          I mainly use JavaScript to build products that are scalable, pixel
          perfect and easy to maintain, but I'm always willing to get my hands
          dirty with other type of Software Languages. Visual Studio Code is my
          Haven💜
        </p>

        <p
          className="heading-about"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Fun Facts😎: <br />
          <span>
            💡 I Speak 4 different Languages,{" "}
            <span className="inner-span__descrption">
              English <img src={UK} alt="Flag of the UK" />
            </span>
            ,{" "}
            <span className="inner-span__descrption">
              German <img src={GER} alt="Flag of Germany" />
            </span>
            ,{" "}
            <span className="inner-span__descrption">
              Spanish <img src={ESP} alt="Flag of Spain" />
            </span>
            and{" "}
            <span className="inner-span__descrption">
              Yoruba(mother tongue) <img src={NGA} alt="Flag of Nigeria" />
            </span>
            <br />
            💡 On days when I'm not at my workstation, you'll find me making
            documentaries on Lifestyle escapades.
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
