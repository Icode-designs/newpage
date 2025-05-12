import React, { useState } from "react";

// data
import { PackagesData, ServiceSectionData } from "utils/data";

// styles
import { CheckBoxcontainer } from "./bookingFormStyles";

function Checkboxes({
  checkedServices,
  setCheckedServices,
  selectedPlan,
  setSelectedPlan,
}) {
  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    setCheckedServices((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  return (
    <CheckBoxcontainer>
      <fieldset>
        <legend>Select Service(s)</legend>
        <div>
          {ServiceSectionData.map((data, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={data.id}
                name={data.name}
                checked={checkedServices[data.name] || false}
                onChange={handleServiceChange}
              />
              <label htmlFor={data.id}>{data.name}</label>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Select Plan</legend>
        <div>
          {PackagesData.map((data, index) => (
            <div key={index}>
              <input
                type="radio"
                id={data.id}
                name="package"
                value={data.name}
                checked={selectedPlan === data.name}
                onChange={handlePlanChange}
              />
              <label htmlFor={data.id}>{data.name}</label>
            </div>
          ))}
        </div>
      </fieldset>
    </CheckBoxcontainer>
  );
}

export default Checkboxes;
