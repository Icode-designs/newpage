import React from "react";
import { PackageOverviewBox } from "./packageOverviewStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";

function PackageOverview({ plan }) {
  return (
    <PackageOverviewBox>
      <div>
        <h2>{plan.name}</h2>
        <BigHeading text="Price is available at request" />
      </div>
    </PackageOverviewBox>
  );
}

export default PackageOverview;
