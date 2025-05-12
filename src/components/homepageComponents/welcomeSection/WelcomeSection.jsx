import React from "react";
import styled from "styled-components";
import { QualitiesData } from "utils/data";
import Qualities from "./Qualities";
import {
  WelcomeArticleContainer,
  WelcomeImageContainer,
  WelcomeSectionBox,
} from "./welcomeStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import Button from "components/sharedComponents/customButton/Button";
import { Link } from "react-router-dom";

function WelcomeSection() {
  return (
    <WelcomeSectionBox>
      <div>
        <WelcomeImageContainer>
          <div></div>
          <div></div>
        </WelcomeImageContainer>
        <WelcomeArticleContainer>
          <article>
            <BigHeading>Welcome To Our NewPage Cleaning Company!</BigHeading>
            <p>
              We make your space shine! Professional and reliable cleaning
              service company providing top-notch solutions for homes and
              businesses. Satisfaction guaranteed!"
            </p>
          </article>
          <ul>
            {QualitiesData.map((data, index) => {
              return <Qualities quality={data} key={index} />;
            })}
          </ul>
          <Link to="/booking">
            <Button $bg="var(--col-10)">Book Us Now!</Button>
          </Link>
        </WelcomeArticleContainer>
      </div>
    </WelcomeSectionBox>
  );
}

export default WelcomeSection;
