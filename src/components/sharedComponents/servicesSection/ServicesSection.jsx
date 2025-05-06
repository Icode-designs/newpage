import React, { useRef } from "react";
import { ServiceSectionData } from "utils/data";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { ScrollContainer, ServiceSectionBox } from "./servicSectionStyles";
import ServiceContent from "./ServiceContent";
import SectionIntro from "components/sharedComponents/sectionIntro/SectionIntro";

function ServicesSection({ ...props }) {
  const scrollContainerRef = useRef(null);

  const handleLeftClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -348,
        behavior: "smooth",
      });
    }
  };

  const handleRightClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 348,
        behavior: "smooth",
      });
    }
  };

  return (
    <ServiceSectionBox id="service-section" {...props}>
      <button
        className="arrow-icon icon--left"
        onClick={handleLeftClick}
        aria-label="Scroll left"
      >
        <FaArrowLeftLong />
      </button>
      <button
        className="arrow-icon icon--right"
        onClick={handleRightClick}
        aria-label="Scroll right"
      >
        <FaArrowRightLong />
      </button>
      <SectionIntro
        {...props}
        text="We always provide the best service"
        heading="Services"
        desc=" While we can customize your cleaning plan to suit your needs, most
        clients schedule regular cleaning services."
      />

      <ScrollContainer ref={scrollContainerRef} {...props}>
        {/* map through service section data and return service content for each data */}
        {ServiceSectionData.map((data, index) => (
          <ServiceContent data={data} key={index} {...props} />
        ))}
      </ScrollContainer>
    </ServiceSectionBox>
  );
}

export default ServicesSection;
