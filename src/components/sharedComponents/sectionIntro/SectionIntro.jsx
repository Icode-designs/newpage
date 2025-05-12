import React from "react";
import styled from "styled-components";
import { SectionIntroBox } from "./sectionIntroStyles";
import BigHeading from "../bigHeading/BigHeading";
import Article from "../article/Article";

//section intro styles

function SectionIntro({ text, articleDetails, ...props }) {
  return (
    <SectionIntroBox {...props}>
      <BigHeading>{text}</BigHeading>
      <Article articleDetails={articleDetails} />
    </SectionIntroBox>
  );
}

export default SectionIntro;
