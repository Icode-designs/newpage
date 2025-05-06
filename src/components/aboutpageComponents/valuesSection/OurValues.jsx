import React from "react";
import { OurValueBox } from "./ourValuesStyles";
import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import { FaThumbsUp } from "react-icons/fa";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { PiHandshakeFill } from "react-icons/pi";
import { VscLaw } from "react-icons/vsc";
import Values from "./Values";

function OurValues() {
  const valueData = [
    {
      text: "Responsibility",
      icon: <FaThumbsUp size={32} color="var(--col-10)" />,
      desc: "We take pride in our work, ensuring every task is done with care and attention to detail. Your satisfaction is our priority.",
    },
    {
      text: "Transparency",
      icon: <HiDocumentMagnifyingGlass size={32} color="var(--col-10)" />,
      desc: "We believe in honest communication. From pricing to service expectations, we keep you informed every step of the way.",
    },
    {
      text: "Security",
      icon: <MdOutlineSecurity size={32} color="var(--col-10)" />,
      desc: "Your safety and privacy matter. Our team is thoroughly vetted, and we use secure systems to protect your information.",
    },
    {
      text: "Punctuality",
      icon: <PiClockCountdownBold size={32} color="var(--col-10)" />,
      desc: "We respect your time. Our team arrives as scheduled, ready to provide reliable and efficient service.",
    },
    {
      text: "Trust",
      icon: <PiHandshakeFill size={32} color="var(--col-10)" />,
      desc: "We build trust through consistency and professionalism. Our goal is to exceed your expectations every time.",
    },
    {
      text: "Equality",
      icon: <VscLaw size={32} color="var(--col-10)" />,
      desc: "We treat everyone with fairness and respect. Our inclusive approach ensures all clients and employees feel valued.",
    },
  ];

  return (
    <OurValueBox>
      <div>
        <div>
          <BigHeading text="Our Values" />
          <p>
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services
          </p>
        </div>
        <div>
          {valueData.map((data, index) => {
            return <Values data={data} key={index} />;
          })}
        </div>
      </div>
    </OurValueBox>
  );
}

export default OurValues;
