import MemberOverview from "components/teamDetailpageComponets/memberOverview/MemberOverview";
import MoreDetails from "components/teamDetailpageComponets/moreDetails/MoreDetails";
import { TeamData } from "utils/data";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const TeampageBox = styled.main`
  padding: 1.5rem;
  padding-top: 6.687rem;
  animation: rT 0.5s ease;

  > div {
    padding: 4rem 1.5rem;
    max-width: 47.875rem;
    widows: 100%;
    margin: 0 auto;
    border-radius: 1.875rem;
    background-color: var(--col-70);
  }

  @media (min-width: 768px) {
    padding-top: 12.687rem;
  }
`;

function TeamDetailPage() {
  const { id } = useParams();

  const member = TeamData.find((m) => m.id === parseInt(id));

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <TeampageBox>
      <div>
        <MemberOverview member={member} />
        <MoreDetails member={member} />
      </div>
    </TeampageBox>
  );
}

export default TeamDetailPage;
