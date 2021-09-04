import React from "react";
import HeroImage from "../images/keyboard.png";

function Hero() {
  let hero = "hero";
  return (
    <div>
      <img
        className={hero}
        src={HeroImage}
        alt={"computer keyboard"}
      />
    </div>
  );
}

export default Hero;
