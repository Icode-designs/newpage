import React from "react";
import { PlanIntroBox } from "./planIntroStyles";

function PlanIntro({ plan, text }) {
  return (
    <PlanIntroBox>
      <div>
        <div>
          <h1>{text}</h1>
          <p>{plan.description}</p>
          <ul>
            {plan.inclusiveServices.map((content, i) => {
              return (
                <li key={i}>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PlanIntroBox>
  );
}

export default PlanIntro;
