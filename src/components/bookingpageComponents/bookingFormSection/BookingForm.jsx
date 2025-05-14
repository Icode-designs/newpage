import React, { useEffect, useRef, useState } from "react";

// components
import Button from "components/sharedComponents/customButton/Button";
import Checkboxes from "./Checkboxes";
import FormFeilds from "./FormFeilds";

// styles
import { BookingFormBox } from "./bookingFormStyles";

function BookingForm() {
  const bookingForm = useRef();
  const [formEntry, setFormEntry] = useState({
    name: "",
    email: "",
    contactNumber: "",
    contactAddress: "",
    city: "",
    stateOrProvince: "",
    message: "",
  });

  const [checkedServices, setCheckedServices] = useState({
    houseCleaning: false,
    schoolCleaning: false,
    warehouseCleaning: false,
    apartmentCleaning: false,
    bedroomCleaning: false,
    studioCleaning: false,
  });

  const [selectedPlan, setSelectedPlan] = useState(""); // for single plan

  function handleSubmit(e) {
    e.preventDefault();

    const isFormFilled = Object.values(formEntry).every(
      (value) => value.trim() !== ""
    );

    const isServiceSelected = Object.values(checkedServices).some(
      (value) => value === true
    );

    if (!isFormFilled) {
      alert("Please fill in all input fields.");
      return;
    }

    if (!isServiceSelected) {
      alert("Please select at least one service.");
      return;
    }

    if (!selectedPlan) {
      alert("Please select a plan.");
      return;
    }
    console.log(formEntry, checkedServices, selectedPlan);
    alert("Form submitted successfully!");

    bookingForm.current.submit();
    bookingForm.current.reset();
  }

  return (
    <BookingFormBox>
      <form
        action="https://formsubmit.co/2df93c0a988c718aa50da1e583d75ed2"
        method="POST"
        ref={bookingForm}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New cleaning request ✉️" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_next"
          value="https://newpage-theta.vercel.app/"
        />
        <FormFeilds formEntry={formEntry} setFormEntry={setFormEntry} />
        <Checkboxes
          checkedServices={checkedServices}
          setCheckedServices={setCheckedServices}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />

        <Button type="submit">Submit</Button>
      </form>
    </BookingFormBox>
  );
}

export default BookingForm;
