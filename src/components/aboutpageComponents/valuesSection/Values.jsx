import React from "react";
import { ValueBox } from "./ourValuesStyles";
import { useMediaQuery } from "react-responsive";

function Values({ data }) {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <ValueBox>
      <div>{data.icon}</div>
      <div>
        <h2>{data.text}</h2>
        {isLargeScreen ? <p>{data.desc}</p> : undefined}
      </div>
    </ValueBox>
  );
}

export default Values;
