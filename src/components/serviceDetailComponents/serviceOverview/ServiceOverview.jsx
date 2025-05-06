import React from "react";
import { ServiceOverviewBox } from "./serviceOverviewStyles";
import { useMediaQuery } from "react-responsive";
import Button from "components/sharedComponents/customButton/Button";
import { FaArrowRightLong } from "react-icons/fa6";

function ServiceOverview({ service }) {
  return (
    <ServiceOverviewBox $image={service.image}>
      <div>
        <div></div>
        <article>
          <h2>{service.name}</h2>
          <p>{service.moreDesc}</p>

          <Button $bg="var(--col-10)" $btn_Weight="400">
            Book Now <FaArrowRightLong className="SD-icon" />
          </Button>
        </article>
      </div>
    </ServiceOverviewBox>
  );
}

export default ServiceOverview;
