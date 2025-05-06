import AboutHero from "components/aboutpageComponents/aboutHeroSection/AboutHero";
import SocialPrompt from "components/aboutpageComponents/followUsSection/SocialPrompt";
import OurValues from "components/aboutpageComponents/valuesSection/OurValues";
import TeamInfo from "components/sharedComponents/teamInfoSection/TeamInfo";
import React, { useEffect } from "react";
import styled from "styled-components";

const AboutpageBox = styled.main`
  animation: rT 0.5s ease;
`;

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AboutpageBox>
      <AboutHero />
      <OurValues />
      <TeamInfo $bg_col="#E9EDFF" $padding="8rem 1.5rem" />
      <SocialPrompt />
    </AboutpageBox>
  );
}

export default AboutPage;
