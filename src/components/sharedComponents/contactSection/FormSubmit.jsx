import React, { useRef, useState } from "react";
import { FormBox } from "./contactSectionStyles";
import Button from "components/sharedComponents/customButton/Button";

function FormSubmit() {
  const form = useRef();
  const [entry, setEntry] = useState({
    name: "",
    email: "",
    message: "",
  });

  //handler for all input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!entry.name || !entry.email || !entry.message) {
      alert("one or more form field empty, please try again");
    } else {
      form.current.submit();
      form.current.reset();
    }
  }

  return (
    <FormBox
      action="https://formsubmit.co/2df93c0a988c718aa50da1e583d75ed2"
      method="POST"
      ref={form}
    >
      <input type="hidden" name="_subject" value="New Contact Message ✉️" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_next"
        value="https://newpage-theta.vercel.app/"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={entry.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={entry.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={entry.message}
        onChange={handleChange}
      />
      <Button $bg="var(--col-10)" type="submit" onClick={handleSubmit}>
        Send Message
      </Button>
    </FormBox>
  );
}

export default FormSubmit;
