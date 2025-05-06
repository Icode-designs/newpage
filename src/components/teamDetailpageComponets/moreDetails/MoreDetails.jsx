import React from "react";
import { FullDetailbox } from "./moreDetStyles";

function MoreDetails({ member }) {
  return (
    <FullDetailbox>
      <article>
        <h2>about {member.name}</h2>
        <p>{member.about}</p>
      </article>
      <article>
        <h2>my past experiences</h2>
        <p>{member.experiences}</p>
      </article>
    </FullDetailbox>
  );
}

export default MoreDetails;
