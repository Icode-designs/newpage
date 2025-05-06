import React from "react";
import HeroContent from "./HeroContent";
import { HeroBox } from "./heroStyles";

function Hero() {
  return (
    <HeroBox>
      <div>
        <HeroContent />
      </div>
    </HeroBox>
  );
}

export default Hero;
