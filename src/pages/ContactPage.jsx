import FaqSection from "components/contactpageComponents/faqSection/FaqSection";
import VideoSection from "components/contactpageComponents/videoSection/VideoSection";
import ContactSection from "components/sharedComponents/contactSection/ContactSection";
import React, { useEffect } from "react";
import styled from "styled-components";

const ContactpageBox = styled.main`
  padding: 0;
  padding-top: 6.52rem;
  animation: rT 0.5s ease;
`;

function ContactPage() {
  return (
    <ContactpageBox>
      <ContactSection />
      <VideoSection />
      <FaqSection />
    </ContactpageBox>
  );
}

export default ContactPage;
