import React from "react";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import { TeamHeroBox } from "./teamHeroStyles";

function TeampageHero() {
  return (
    <TeamHeroBox>
      <div>
        <article>
          <BigHeading>
            Effective Cleaning Requires an Expert Cleaning Team
          </BigHeading>
          <p>
            Dedicated to Delivering Spotless Spaces with Customized Cleaning
            Solutions
          </p>
        </article>
      </div>
    </TeamHeroBox>
  );
}

export default TeampageHero;
