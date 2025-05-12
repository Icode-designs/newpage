import React from "react";
import { MoreServiceDetBox } from "./moreServiceDetStylex";
import DetailsUL from "./DetailsUL";
import Button from "components/sharedComponents/customButton/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MoreServiceDetails({ service }) {
  const detailsList = service.includes.includesDetails;

  return (
    <MoreServiceDetBox>
      <div>
        <div>
          <article>
            <h2>About this service</h2>
            <p>{service.about}</p>
          </article>
          <article>
            <h2>What’s included in this service?</h2>
            <p>{service.includes.includesDesc}</p>
            <ol>
              {detailsList.map((x, i) => {
                return (
                  <div key={i}>
                    <li>{x.title}</li>
                    <DetailsUL x={x} />
                  </div>
                );
              })}
            </ol>
          </article>
        </div>

        <div>
          <article>
            <h2>Service Summary</h2>
            <p>{service.summary}</p>
            <p>
              Duration: <span>{service.duration}</span>
            </p>
            <p>
              Schedule: <span>{service.availability}</span>
            </p>
            <Link to="/booking">
              <Button $border="1px solid var(--col-60)" $btn_Weight="400">
                Book Now <FaArrowRightLong className="icon" />
              </Button>
            </Link>
          </article>
        </div>
      </div>
    </MoreServiceDetBox>
  );
}

export default MoreServiceDetails;
