import MoreServiceDetails from "components/serviceDetailComponents/moreDetail/MoreServiceDetails";
import ServiceOverview from "components/serviceDetailComponents/serviceOverview/ServiceOverview";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import Button from "components/sharedComponents/customButton/Button";
import ServiceContent from "components/sharedComponents/servicesSection/ServiceContent";
import {
  ScrollContainer,
  ServiceSectionBox,
} from "components/sharedComponents/servicesSection/servicSectionStyles";
import { ServiceSectionData } from "utils/data";
import React, { useEffect, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const ServiceDetailspageBox = styled.main`
  animation: rT 0.5s ease;

  .services-nav {
    display: flex;
    justify-content: center;
    max-width: 73.125rem;
    margin: 0 auto;
    margin-top: 3rem;

    @media (min-width: 768px) {
      margin-top: 6.312rem;
    }
  }
`;

function ServiceDetailpage() {
  window.scrollTo(0, 0);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const gridColumn = isSmallScreen && "1fr";
  const { id } = useParams();

  const service = ServiceSectionData.find((m) => m.id === parseInt(id));

  if (!service) {
    return <div>service not found</div>;
  }

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
    <ServiceDetailspageBox>
      <ServiceOverview service={service} />
      <MoreServiceDetails service={service} />
      <div className="services-nav">
        <BigHeading text="More Services" />
      </div>
      <ServiceSectionBox $navDisplay={isSmallScreen && "none"}>
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
        <ScrollContainer
          ref={scrollContainerRef}
          $scrollDisplay={isSmallScreen && "grid"}
          $gridColumn={gridColumn}
          $scrollMaxWidth={isSmallScreen ? "26.375rem" : "unset"}
        >
          {ServiceSectionData.map((data, index) => {
            // Skip rendering this item if its id matches the service id
            if (data.id === service.id) {
              return null; // Don't render anything for this data
            }

            // Otherwise, return the ServiceContent component for other data
            return (
              <ServiceContent
                data={data}
                key={index}
                $contentWidth={isSmallScreen && "100%"}
              />
            );
          })}
        </ScrollContainer>
      </ServiceSectionBox>
    </ServiceDetailspageBox>
  );
}

export default ServiceDetailpage;
