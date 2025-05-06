import React from "react";
import styled from "styled-components";
import { QualitiesBox } from "./welcomeStyles";

//import icon
import { FaCircleCheck } from "react-icons/fa6";

function Qualities({ quality }) {
  return (
    <QualitiesBox>
      <FaCircleCheck
        size={16}
        color="var(--col-10)"
        className="qualities-icon"
      />
      <p>{quality}</p>
    </QualitiesBox>
  );
}

export default Qualities;
