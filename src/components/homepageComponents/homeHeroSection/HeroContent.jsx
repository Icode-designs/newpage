import React from "react";
import styled from "styled-components";
import { HeroContentBox } from "./heroStyles";
import Button from "components/sharedComponents/customButton/Button";
import { Link } from "react-router-dom";
import Article from "components/sharedComponents/article/Article";

function HeroContent() {
  const articleDetails = {
    heading: "Specialized, efficient, and thorough cleaning services in US",
    desc: "We provide Performing cleaning tasks using the least amount of time, energy, and money.",
  };

  const customStyles = {
    $headingSize: "2.5rem",
    $headingCol: "var(--col-70)",
    $descCol: "var(--col-70)",
  };
  return (
    <HeroContentBox>
      <p>Quality cleaning at a fair price.</p>

      <Article articleDetails={articleDetails} {...customStyles} />

      <div>
        <Link to="/booking">
          <Button $bg="var(--col-10)">Get Started Now</Button>
        </Link>
        <Link to="/services">
          <Button variant="secondary">View all Services</Button>
        </Link>
      </div>
    </HeroContentBox>
  );
}

export default HeroContent;
