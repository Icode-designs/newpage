import React, { useEffect } from "react";
import styled from "styled-components";

//import sections
import CallToAction from "components/homepageComponents/callToActionSection/CallToAction";
import Hero from "components/homepageComponents/homeHeroSection/Hero";
import ServicesSection from "components/sharedComponents/servicesSection/ServicesSection";
import WelcomeSection from "components/homepageComponents/welcomeSection/WelcomeSection";
import Pricing from "components/homepageComponents/pricingSection/Pricing";
import Testimonials from "components/homepageComponents/testimonialSection/Testimonials";
import ContactSection from "components/sharedComponents/contactSection/ContactSection";
import TeamInfo from "components/sharedComponents/teamInfoSection/TeamInfo";

//homepage general styles
const HomepageBox = styled.main`
  animation: rT 0.5s ease;
`;

function Homepage() {
  return (
    <HomepageBox>
      <Hero />
      <ServicesSection />
      <CallToAction />
      <TeamInfo />
      <WelcomeSection />
      <Pricing />
      <Testimonials />
      <ContactSection />
    </HomepageBox>
  );
}

export default Homepage;
