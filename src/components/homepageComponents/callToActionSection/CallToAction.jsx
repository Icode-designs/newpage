import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// styles
import { CallBox, CtaImageContainer } from "./ctaStyles";

// components
import Button from "components/sharedComponents/customButton/Button";
import Article from "components/sharedComponents/article/Article";

function CallToAction() {
  const islargeScreen = useMediaQuery({ query: "(min-width: 500px)" });

  const articleDetails = {
    heading: "High-Quality and Friendly Services at Good Prices",
    desc: "We provide comprehensive cleaning services tailored to your needs. From residential cleaning services",
  };

  const customStyles = {
    $headingSize: "2.19rem",
    $headingCol: "var(--col-30)",
  };
  return (
    <CallBox>
      <div className="container">
        <article>
          <p>Affordable cleaning solutions</p>

          <Article articleDetails={articleDetails} {...customStyles} />

          {islargeScreen && (
            <Link to="/booking">
              <Button $bg="var(--col-10)">Book Us Now!</Button>
            </Link>
          )}
        </article>
        <CtaImageContainer>
          <div aria-label="call to action, cleaning image one"></div>
          <div aria-label="call to action, cleaning image two"></div>
        </CtaImageContainer>
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
