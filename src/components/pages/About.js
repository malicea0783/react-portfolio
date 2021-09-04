import React from "react";
import HeroImage from "../../images/keyboard.png";

function About() {
  let container = "about-container";
  let hero = "hero";
  let aboutClass = "about-container about";
  return (
    <div className={container}>
      <img
        className={hero}
        src={HeroImage}
        alt={"computer keyboard"}
      />

      <div className={aboutClass}>
        <p>
          I'm someone that loves puzzles so web development is an absolutely perfect fit for me!
          Dove head first into the Northwestern Bootcamp and am ready and eager to start my career as a coding machine!
        </p>
      </div>
    </div>
  );
}

export default About;
