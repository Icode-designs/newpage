import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

// icons
import { FaAngleRight } from "react-icons/fa6";

// data
import { FaqData } from "utils/data";

// components
import Article from "components/sharedComponents/article/Article";

// styles
import { FaqBox, FaqContainer } from "./faqStyles";

function FaqSection() {
  const [toggleState, setToggleState] = useState(null);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const headingSize = isLargeScreen ? "2.75rem" : "2.1875rem";

  function handleClick(index) {
    // auto close faq
    setToggleState((prevToggleState) =>
      prevToggleState === index ? null : index
    );
  }

  const articleDetails = {
    heading: "Frequently asked questions",
    desc: "We provide comprehensive cleaning services tailored to your needs. From residential cleaning  services",
  };

  const customStyles = {
    $headingSize: { headingSize },
    $headingCol: "var(--col-30)",
  };

  return (
    <FaqBox>
      <div>
        <Article articleDetails={articleDetails} props={customStyles} />

        <FaqContainer>
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
        </FaqContainer>
      </div>
    </FaqBox>
  );
}

export default FaqSection;
