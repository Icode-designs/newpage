import React from "react";
import styled from "styled-components";

//import icons
import { FaArrowRightLong } from "react-icons/fa6";
import { ServiceContentBox, ServiceImage } from "./servicSectionStyles";
import Button from "components/sharedComponents/customButton/Button";
import { Link } from "react-router-dom";

function ServiceContent({ data, ...props }) {
  return (
    <ServiceContentBox {...props}>
      <div>
        <ServiceImage $image={data.image}></ServiceImage>
        <article>
          <h1>{data.name}</h1>
          <p>{data.desc}</p>
        </article>
        <Link to={`/services/${data.id}`}>
          <Button variant="secondary">
            Details <FaArrowRightLong className="icon" />
          </Button>
        </Link>
      </div>
    </ServiceContentBox>
  );
}

export default ServiceContent;
