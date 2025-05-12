import React from "react";
import {
  ContactArticleContainer,
  ContactSectionBox,
} from "./contactSectionStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import FormSubmit from "./FormSubmit";
import FindUs from "./FindUs";

function ContactSection() {
  return (
    <ContactSectionBox>
      <div>
        <ContactArticleContainer>
          <article>
            <p>Contact info</p>
            <BigHeading>Keep In Touch</BigHeading>
            <p>
              We prioritize responding to your inquiries promptly to ensure you
              receive the assistance you need in a timely manner
            </p>
          </article>
          <FormSubmit />
        </ContactArticleContainer>
        <FindUs />
      </div>
    </ContactSectionBox>
  );
}

export default ContactSection;
