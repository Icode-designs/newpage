import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { TestimonialCardBox } from "./testimonialStyles";

function TestimonialCard({ data }) {
  return (
    <TestimonialCardBox $img={data.image}>
      <div className="image"></div>
      <article>
        <div className="titleBox">
          <div>
            <h3>{data.name}</h3>
            <p>{data.role}</p>
            <div>
              {[...Array(data.stars)].map((_, i) => (
                <IoIosStar key={i} color="gold" size={24} />
              ))}
            </div>
          </div>
          <div className="quote-icon">
            <FaQuoteRight size={34} />
          </div>
        </div>
        <p>{data.comment}</p>
      </article>
    </TestimonialCardBox>
  );
}

export default TestimonialCard;
