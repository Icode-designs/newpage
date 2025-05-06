import React, { useRef } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TestimonialsData } from "utils/data";
import TestimonialCard from "./TestimonialCard";
import { ScrollBox, TestimonialsBox } from "./testimonialStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";

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
        <article>
          <BigHeading text="Feedback About Their Experience With Us" />
          <p>
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes
          </p>
          <div>
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
          </div>
        </article>
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
