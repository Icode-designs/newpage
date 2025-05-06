import React from "react";
import styled from "styled-components";
import { HeroContentBox } from "./heroStyles";
import Button from "components/sharedComponents/customButton/Button";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <HeroContentBox>
      <p>Quality cleaning at a fair price.</p>
      <h1>Specialized, efficient, and thorough cleaning services in US</h1>
      <p>
        We provide Performing cleaning tasks using the least amount of time,
        energy, and money.
      </p>
      <div>
        <Link to="/booking">
          <Button $bg="var(--col-10)">Get Started Now</Button>
        </Link>
        <Link to="/services">
          <Button $border="1px solid var(--col-10)">View all Services</Button>
        </Link>
      </div>
    </HeroContentBox>
  );
}

export default HeroContent;
