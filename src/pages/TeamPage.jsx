import BigHeading from "components/sharedComponents/bigHeading/BigHeading";
import TeamInfo from "components/sharedComponents/teamInfoSection/TeamInfo";
import TeampageHero from "components/teampageComponents/teamHero/TeampageHero";
import React, { useEffect } from "react";
import styled from "styled-components";

const TeampageBox = styled.main`
  animation: rT 0.5s ease;

  .teamSection-title {
    padding: 2.5rem 1.5rem;
    padding-top: 4.687rem;
    width: 100%;
    max-width: 73.125rem;
    margin: 0 auto;
    border-bottom: 1px solid var(--col-50);
    h1 {
      text-align: center;
      color: var(--col-30);
      font-size: 2.75rem;
      max-width: 25.125rem;
      margin: 0 auto;
    }
  }
`;
function TeamPage() {
  return (
    <TeampageBox>
      <TeampageHero />
      <div className="teamSection-title">
        <h1>Meet Our Wonderful Team</h1>
      </div>
      <TeamInfo $introDisplay="none !important" />
    </TeampageBox>
  );
}

export default TeamPage;
