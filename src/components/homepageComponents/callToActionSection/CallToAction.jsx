import React from "react";
import { useMediaQuery } from "react-responsive";
import { CallBox } from "./ctaStyles";
import Button from "components/sharedComponents/customButton/Button";
import { Link } from "react-router-dom";

function CallToAction() {
  const islargeScreen = useMediaQuery({ query: "(min-width: 500px)" });
  return (
    <CallBox>
      <div className="container">
        <article>
          <p>Affordable cleaning solutions</p>
          <h1>High-Quality and Friendly Services at Good Prices</h1>
          <p>
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services
          </p>
          {islargeScreen && (
            <Link to="/booking">
              <Button $bg="var(--col-10)">Book Us Now!</Button>
            </Link>
          )}
        </article>
        <div>
          <div aria-label="call to action, cleaning image one"></div>
          <div aria-label="call to action, cleaning image two"></div>
        </div>
        {!islargeScreen && (
          <Link to="/booking">
            <Button $bg="var(--col-10)">Book Us Now!</Button>
          </Link>
        )}
      </div>
    </CallBox>
  );
}

export default CallToAction;
