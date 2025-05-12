import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import React from "react";
import { TestimonialBtnContainer } from "./testimonialStyles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function TestimonialArticle({ scrollToChild }) {
  return (
    <article>
      <BigHeading>Feedback About Their Experience With Us</BigHeading>
      <p>
        Read testimonials from our satisfied clients. See how our cleaning
        services have made a difference in their lives and homes
      </p>
      <TestimonialBtnContainer>
        <button
          onClick={() => scrollToChild("prev")}
          aria-label="Scroll testimonials left"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scrollToChild("next")}
          aria-label="Scroll testimonials right"
        >
          <FaArrowRight />
        </button>
      </TestimonialBtnContainer>
    </article>
  );
}

export default TestimonialArticle;
