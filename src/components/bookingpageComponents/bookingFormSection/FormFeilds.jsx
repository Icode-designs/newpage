import React, { useState } from "react";

// data
import { fieldNames } from "./bookingFormData";

// styles
import { FormFeildContainer } from "./bookingFormStyles";

function FormFields({ formEntry, setFormEntry }) {
  //Todo: creat a feild map to store values used for setting id, name and value
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
    //Todo: use the onChange event to update input feilds whilst storing input for form validation
    const { name, value } = e.target;
    setFormEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <FormFeildContainer>
      {fieldNames.map((label, index) => {
        //Todo: set a vailrable "feildKey" for each input feild to dynamically set name, id, and value for each form feild
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
                type={fieldKey === "contactNumber" ? "tel" : "text"} //sets type to tel if feildkey === contactNumber else sets type to text
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
