import React, { useState } from "react";
import { FaqBox } from "./faqStyles";
import Article from "components/sharedComponents/article/Article";
import { useMediaQuery } from "react-responsive";
import { FaAngleRight } from "react-icons/fa6";
import { FaqData } from "utils/data";

function FaqSection() {
  const [toggleState, setToggleState] = useState(null);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const headingSize = isLargeScreen ? "2.75rem" : "2.1875rem";

  function handleClick(index) {
    setToggleState((prevToggleState) =>
      prevToggleState === index ? null : index
    );
  }

  return (
    <FaqBox>
      <div>
        <Article
          heading="Frequently asked questions"
          desc="We provide comprehensive cleaning services tailored to your needs. From residential cleaning  services"
          $headingSize={headingSize}
          $headingCol="var(--col-30)"
        />

        <div id="faq">
          {FaqData.map((data, index) => {
            return (
              <details
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(index);
                }}
                key={index}
                open={toggleState === index}
              >
                <summary>
                  {data.summary}
                  <span>
                    <FaAngleRight className="accordion-btn" />
                  </span>
                </summary>
                <p>{data.desc}</p>
              </details>
            );
          })}
        </div>
      </div>
    </FaqBox>
  );
}

export default FaqSection;
