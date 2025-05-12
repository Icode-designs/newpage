import React from "react";
import { ServicesHeroBox } from "./servicesHeroStyles";
import Article from "components/sharedComponents/article/Article";

function ServicespageHero() {
  const articleDetails = {
    heading: "Our Services",
    desc: "Comprehensive Cleaning Solutions Tailored to Meet Your Needs — From Homes to Offices and Everything in Between.",
  };
  return (
    <ServicesHeroBox>
      <div>
        <Article articleDetails={articleDetails} $headingSize="2.5rem" />
      </div>
    </ServicesHeroBox>
  );
}

export default ServicespageHero;
