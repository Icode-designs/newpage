import React from "react";
import { ContactSectionBox } from "./contactSectionStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import FormSubmit from "./FormSubmit";
import FindUs from "./FindUs";

function ContactSection() {
  return (
    <ContactSectionBox>
      <div>
        <div>
          <article>
            <p>Contact info</p>
            <BigHeading text="Keep In Touch" />
            <p>
              We prioritize responding to your inquiries promptly to ensure you
              receive the assistance you need in a timely manner
            </p>
          </article>
          <FormSubmit />
        </div>
        <FindUs />
      </div>
    </ContactSectionBox>
  );
}

export default ContactSection;
