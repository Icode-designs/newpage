import React from "react";
import { FindusBox } from "./contactSectionStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import { MdPhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

function FindUs() {
  return (
    <FindusBox>
      <BigHeading text="Find us" />
      <div>
        <div className="findUs-banner">
          <div className="findUs-icon">
            <MdPhoneInTalk size={16} color="var(--col-70)" />
          </div>
          <div>
            <h3>Call Us</h3>
            <a href="tel:+1 (562) 340-2812">+1 (562) 340-2812</a>
            <a href="tel:+1 (310) 200-9689">+1 (310) 200-9689</a>
          </div>
        </div>
        <div className="findUs-banner">
          <div className="findUs-icon">
            <TfiEmail size={16} color="var(--col-70)" />
          </div>
          <div>
            <h3>Email Now</h3>
            <a href="mailto:newpagecleaning25@gmail.com">
              newpagecleaning25@gmail.com
            </a>
          </div>
        </div>
        <div className="findUs-banner">
          <div className="findUs-icon">
            <FaLocationDot size={16} color="var(--col-70)" />
          </div>
          <div>
            <h3>Address</h3>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=13725+Chadron+Ave.+Appt.+210.+Hawthorne,+California+90250.+USA"
              target="_blank"
              rel="noopener noreferrer"
            >
              13725 Chadron Ave. Appt. 210. Hawthorne, California 90250. USA
            </a>
          </div>
        </div>
      </div>
    </FindusBox>
  );
}

export default FindUs;
