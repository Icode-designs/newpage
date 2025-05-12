import ServicespageHero from "components/servicespageComponents/servicespageHero/ServicespageHero";
import ServicesSection from "components/sharedComponents/servicesSection/ServicesSection";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const ServicespageBox = styled.main`
  animation: rT 0.5s ease;
`;

function ServicesPage() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1199px)" });

  const gridColumn = isSmallScreen
    ? "1fr"
    : isMediumScreen
    ? "repeat(2, 1fr)"
    : "repeat(3, 1fr)";
  return (
    <ServicespageBox>
      <ServicespageHero />
      <ServicesSection
        $contentDirection="column"
        $articleDisplay="none"
        $navDisplay="none"
        $scrollDisplay="grid"
        $headingAlign="center"
        $gridColumn={gridColumn}
        $topBorder="1px solid var(--col-50)"
        $topPadding="2.5rem"
        $headingWidth="fit-content"
        $headingMargin="0 auto"
        $contentWidth="100%"
      />
    </ServicespageBox>
  );
}

export default ServicesPage;
