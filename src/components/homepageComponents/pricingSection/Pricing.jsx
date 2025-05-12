import React from "react";
import { PackagesData } from "utils/data";
import { PackagesContainer, PricingBox } from "./pricingStyles";
import Package from "./Package";

function Pricing() {
  return (
    <PricingBox>
      <div>
        <article>
          <p>our pricing</p>
          <h1>Choose From Our Lowest Plans and Prices</h1>
        </article>
        <PackagesContainer>
          {PackagesData.map((data, index) => {
            return <Package data={data} key={index} />;
          })}
        </PackagesContainer>
      </div>
    </PricingBox>
  );
}

export default Pricing;
