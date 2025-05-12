import React from "react";

//components
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import Values from "./Values";

//styles
import { AboutpageSectionInnerBox } from "../aboutpageGenStyles";
import { OurValueBox } from "./ourValuesStyles";

//data
import { valueData } from "./valuesListData";

function OurValues() {
  return (
    <OurValueBox>
      <AboutpageSectionInnerBox>
        <div>
          <BigHeading>Our Values</BigHeading>
          <p>
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services
          </p>
        </div>
        <div>
          {valueData.map((data, index) => {
            return <Values data={data} key={index} />;
          })}
        </div>
      </AboutpageSectionInnerBox>
    </OurValueBox>
  );
}

export default OurValues;
