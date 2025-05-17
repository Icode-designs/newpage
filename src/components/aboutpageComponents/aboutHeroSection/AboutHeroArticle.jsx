import React from "react";
import { NavLink } from "react-router-dom";

// components
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import Button from "components/sharedComponents/customButton/Button";

//styles
import { AboutHeroArticleBox, ButtonContainer } from "./aboutHeroStyles";

function AboutHeroArticle() {
  return (
    <AboutHeroArticleBox>
      <BigHeading>About our Company</BigHeading>
      <p>
        Dedicated to Delivering Spotless Spaces with Customized Cleaning
        Solutions
      </p>

      <ButtonContainer>
        <NavLink to="/booking">
          <Button variant="primary">Get Started Now</Button>
        </NavLink>
        <NavLink to="/services">
          <Button variant="secondary">View all Services</Button>
        </NavLink>
      </ButtonContainer>
    </AboutHeroArticleBox>
  );
}

export default AboutHeroArticle;
