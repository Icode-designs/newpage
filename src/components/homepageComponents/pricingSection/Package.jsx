import React from "react";
import styled from "styled-components";
import Button from "components/sharedComponents/customButton/Button";
import { PackageBox } from "./pricingStyles";
import { Link } from "react-router-dom";

function Package({ data }) {
  return (
    <PackageBox>
      <h2>{data.name}</h2>
      <div>
        <h3>Prices available on request</h3>
      </div>

      <ul>
        {data.contents.map((item, index) => {
          return <li key={`${item}+${index}`}>{item}</li>;
        })}
      </ul>
      <Link to={`/package/${data.id}`}>
        <Button variant="secondary">Details</Button>
      </Link>
    </PackageBox>
  );
}

export default Package;
