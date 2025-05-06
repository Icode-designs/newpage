import React from "react";
import { DetailsUlBox } from "./moreServiceDetStylex";

function DetailsUL({ x }) {
  return (
    <DetailsUlBox>
      {x.services.map((y, index) => {
        return <li key={index}>{y}</li>;
      })}
    </DetailsUlBox>
  );
}

export default DetailsUL;
