import React from "react";
import styled from "styled-components";
import { QualitiesData } from "utils/data";
import Qualities from "./Qualities";
import { WelcomeSectionBox } from "./welcomeStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import Button from "components/sharedComponents/customButton/Button";

function WelcomeSection() {
  return (
    <WelcomeSectionBox>
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <article>
            <BigHeading text="Welcome To Our NewPage Cleaning Company!" />
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
          <Button $bg="var(--col-10)">Book Us Now!</Button>
        </div>
      </div>
    </WelcomeSectionBox>
  );
}

export default WelcomeSection;
