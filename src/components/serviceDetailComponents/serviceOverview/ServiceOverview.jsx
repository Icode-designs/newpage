import React from "react";
import { ServiceOverviewBox } from "./serviceOverviewStyles";
import { useMediaQuery } from "react-responsive";
import Button from "components/sharedComponents/customButton/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ServiceOverview({ service }) {
  return (
    <ServiceOverviewBox $image={service.image}>
      <div>
        <div></div>
        <article>
          <h2>{service.name}</h2>
          <p>{service.moreDesc}</p>
          <Link to="/booking">
            <Button variant="secondary">
              Book Now <FaArrowRightLong className="SD-icon" />
            </Button>
          </Link>
        </article>
      </div>
    </ServiceOverviewBox>
  );
}

export default ServiceOverview;
