import React, { useRef } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TestimonialsData } from "utils/data";
import TestimonialCard from "./TestimonialCard";
import {
  ScrollBox,
  TestimonialBtnContainer,
  TestimonialsBox,
} from "./testimonialStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import TestimonialArticle from "./TestimonialArticle";

function Testimonials() {
  const scrollBoxRef = useRef(null);

  const scrollToChild = (direction) => {
    const container = scrollBoxRef.current;
    if (!container) return;

    const scrollAmount =
      direction === "next" ? container.clientWidth : -container.clientWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <TestimonialsBox>
      <div>
        <TestimonialArticle scrollToChild={scrollToChild} />
        <ScrollBox ref={scrollBoxRef}>
          {TestimonialsData.map((data) => (
            <TestimonialCard data={data} key={data.name} />
          ))}
        </ScrollBox>
      </div>
    </TestimonialsBox>
  );
}

export default Testimonials;
