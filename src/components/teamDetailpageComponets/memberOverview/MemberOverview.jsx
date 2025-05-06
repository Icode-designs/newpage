import React from "react";
import { OverviewBow } from "./OverviewStyles";
import { IoIosStar } from "react-icons/io";
import SocialLinks from "components/sharedComponents/socialLinks/SocialLinks";

function MemberOverview({ member }) {
  return (
    <OverviewBow $image={member.image}>
      <div>
        <div></div>
        <article>
          <p>staff member</p>
          <h2>{member.name}</h2>
          <div>
            {[...Array(member.stars)].map((_, i) => (
              <IoIosStar key={i} color="gold" size={18} />
            ))}
          </div>
          <p>{member.desc}</p>
          <SocialLinks />
        </article>
      </div>
    </OverviewBow>
  );
}

export default MemberOverview;
