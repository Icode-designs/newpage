import React, { useState } from "react";

// data
import { fieldNames } from "./bookingFormData";

// styles
import { FormFeildContainer } from "./bookingFormStyles";

function FormFields({ formEntry, setFormEntry }) {
  const fieldMap = {
    "Full Name": "name",
    "Email Address": "email",
    "Contact Address": "contactAddress",
    City: "city",
    "State/province": "stateOrProvince",
    "Contact Number": "contactNumber",
    "Add more Description": "message",
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <FormFeildContainer>
      {fieldNames.map((label, index) => {
        const fieldKey = fieldMap[label];

        if (!fieldKey) return null;

        return (
          <div key={index}>
            <label htmlFor={fieldKey}>{label}</label>
            {fieldKey === "message" ? (
              <textarea
                placeholder="Message"
                id={fieldKey}
                name={fieldKey}
                value={formEntry[fieldKey]}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type={fieldKey === "contactNumber" ? "tel" : "text"}
                placeholder={label}
                id={fieldKey}
                name={fieldKey}
                value={formEntry[fieldKey]}
                onChange={handleChange}
                required
              />
            )}
          </div>
        );
      })}
    </FormFeildContainer>
  );
}

export default FormFields;
