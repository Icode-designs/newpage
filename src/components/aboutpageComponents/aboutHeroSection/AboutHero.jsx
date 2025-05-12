import React from "react";

//components
import Achievements from "./Achievements";
import AboutHeroArticle from "./AboutHeroArticle";

//styles
import { AboutpageSectionInnerBox } from "../aboutpageGenStyles";
import { AboutBg, AboutHeroBox } from "./aboutHeroStyles";

function AboutHero() {
  return (
    <AboutHeroBox>
      <AboutpageSectionInnerBox>
        <div>
          <AboutBg></AboutBg>
          <AboutHeroArticle />
          <Achievements />
        </div>
      </AboutpageSectionInnerBox>
    </AboutHeroBox>
  );
}

export default AboutHero;
