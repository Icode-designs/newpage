import React from "react";
import { FormBox } from "./contactSectionStyles";
import Button from "components/sharedComponents/customButton/Button";

function FormSubmit() {
  return (
    <FormBox>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" />
      <Button $bg="var(--col-10)">Send Message</Button>
    </FormBox>
  );
}

export default FormSubmit;
