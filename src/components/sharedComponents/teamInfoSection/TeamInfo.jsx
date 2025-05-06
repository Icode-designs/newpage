import React from "react";
import styled from "styled-components";
import { TeamData } from "utils/data";
import TeamMember from "./TeamMember";
import { TeamInfoBox } from "./teamStyles";
import SectionIntro from "components/sharedComponents/sectionIntro/SectionIntro";

function TeamInfo({ ...props }) {
  return (
    <TeamInfoBox {...props}>
      <div>
        <SectionIntro
          {...props}
          text="Effective Cleaning Requires an Expert Cleaning Team"
          heading="Expert Team"
          desc="We have professional expert cleaning staff ensuring top-notch
              cleanliness and hygiene for your space."
        />
        <ul>
          {TeamData.map((data, index) => {
            return <TeamMember data={data} key={index} />;
          })}
        </ul>
      </div>
    </TeamInfoBox>
  );
}

export default TeamInfo;
