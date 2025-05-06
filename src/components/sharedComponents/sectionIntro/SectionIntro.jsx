import React from "react";
import styled from "styled-components";
import { SectionIntroBox } from "./sectionIntroStyles";
import BigHeading from "../bigHeading/BigHeading";
import Article from "../article/Article";

//section intro styles

function SectionIntro({ text, heading, desc, ...props }) {
  return (
    <SectionIntroBox {...props}>
      <BigHeading text={text} />
      <Article heading={heading} desc={desc} />
    </SectionIntroBox>
  );
}

export default SectionIntro;
