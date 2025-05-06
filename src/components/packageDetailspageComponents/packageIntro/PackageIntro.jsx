import React from "react";
import { PackageIntroBox } from "./packageIntroStyles";

function PackageIntro({ plan, text }) {
  return (
    <PackageIntroBox>
      <div>
        <div>
          <h1>{text}</h1>
          <p>{plan.intro}</p>
          <ul>
            {plan.contents.map((content, i) => {
              return (
                <li key={i}>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PackageIntroBox>
  );
}

export default PackageIntro;
