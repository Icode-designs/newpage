import React from "react";
import { ServicesHeroBox } from "./servicesHeroStyles";
import Article from "components/sharedComponents/article/Article";

function ServicespageHero() {
  return (
    <ServicesHeroBox>
      <div>
        <Article
          heading="Our Services"
          desc="Comprehensive Cleaning Solutions Tailored to Meet Your Needs — From Homes to Offices and Everything in Between."
          $headingSize="2.5rem"
        />
      </div>
    </ServicesHeroBox>
  );
}

export default ServicespageHero;
