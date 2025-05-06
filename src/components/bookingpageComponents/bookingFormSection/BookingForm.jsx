import React, { useEffect, useState } from "react";
import { BookingFormBox } from "./bookingFormStyles";
import Button from "components/sharedComponents/customButton/Button";

function BookingForm() {
  const [error, setError] = useState("");

  useEffect(() => {
    const planCheckboxes = document.querySelectorAll(
      "#basicPackage, #enterprisePackage, #premiumPackage"
    );

    const handlePlanChange = (e) => {
      if (e.target.checked) {
        planCheckboxes.forEach((cb) => {
          if (cb !== e.target) cb.checked = false;
        });
      }
    };

    planCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", handlePlanChange);
    });

    return () => {
      planCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", handlePlanChange);
      });
    };
  }, []);

  const validateForm = () => {
    const requiredFields = [
      "fullName",
      "eMail",
      "ContactNumber",
      "ContactAddress",
      "city",
      "state_or_province",
    ];

    for (const id of requiredFields) {
      const el = document.getElementById(id);
      if (!el || el.value.trim() === "") {
        setError("Please fill in all required fields.");

        return false;
      }
    }

    const selectedServices = document.querySelectorAll(
      "#schoolCleaning:checked, #studioCleaning:checked, #houseCleaning:checked, #warehouseCleaning:checked, #bedroomCleaning:checked, #apartmentCleaning:checked"
    );

    if (selectedServices.length < 1) {
      setError("Please select at least one service.");
      return false;
    }

    const selectedPlan = document.querySelectorAll(
      "#basicPackage:checked, #enterprisePackage:checked, #premiumPackage:checked"
    );

    if (selectedPlan.length !== 1) {
      setError("Please select exactly one plan.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop default submit

    if (validateForm()) {
      // All good, submit manually
      e.target.submit();
    }
  };

  return (
    <BookingFormBox>
      <form
        action="https://formsubmit.co/ifeosaks111@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              name="Full Name"
            />
          </div>
          <div>
            <label htmlFor="eMail">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              id="eMail"
              name="Email Address"
            />
          </div>
          <div>
            <label htmlFor="ContactNumber">Contact Number</label>
            <input
              type="tel"
              placeholder="Contact Number"
              id="ContactNumber"
              name="Contact Number"
            />
          </div>
          <div>
            <label htmlFor="ContactAddress">Contact Address</label>
            <input
              type="text"
              placeholder="Contact Address"
              id="ContactAddress"
              name="Contact Address"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" placeholder="City" id="city" name="City" />
          </div>
          <div>
            <label htmlFor="state_or_province">State/Province</label>
            <input
              type="text"
              placeholder="State/Province"
              id="state_or_province"
              name="State/Province"
            />
          </div>
          <div>
            <label htmlFor="message">Add More Description</label>
            <textarea placeholder="Message" id="message" name="Message" />
          </div>
        </div>

        <div className="checkBoxes">
          <fieldset>
            <legend>Select Service(s)</legend>
            <div>
              <div>
                <input
                  type="checkbox"
                  id="schoolCleaning"
                  name="School Cleaning"
                />
                <label htmlFor="schoolCleaning">School Cleaning</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="studioCleaning"
                  name="Studio Cleaning"
                />
                <label htmlFor="studioCleaning">Studio Cleaning</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="houseCleaning"
                  name="House Cleaning"
                />
                <label htmlFor="houseCleaning">House Cleaning</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="warehouseCleaning"
                  name="Warehouse Cleaning"
                />
                <label htmlFor="warehouseCleaning">Warehouse Cleaning</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="bedroomCleaning"
                  name="1-3 Bedroom Cleaning"
                />
                <label htmlFor="bedroomCleaning">1-3 Bedroom Cleaning</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="apartmentCleaning"
                  name="Apartment Cleaning"
                />
                <label htmlFor="apartmentCleaning">Apartment Cleaning</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Select Plan</legend>
            <div>
              <div>
                <input type="checkbox" id="basicPackage" name="Basic Package" />
                <label htmlFor="basicPackage">Basic Package</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="enterprisePackage"
                  name="Enterprise Package"
                />
                <label htmlFor="enterprisePackage">Enterprise Package</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="premiumPackage"
                  name="Premium Package"
                />
                <label htmlFor="premiumPackage">Premium Package</label>
              </div>
            </div>
          </fieldset>
        </div>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            {error}
          </p>
        )}

        <Button $bg="var(--col-10)" type="submit">
          Submit
        </Button>
      </form>
    </BookingFormBox>
  );
}

export default BookingForm;
