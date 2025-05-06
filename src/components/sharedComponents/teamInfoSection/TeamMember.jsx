import React from "react";
import styled from "styled-components";
import { MemberBox } from "./teamStyles";
import { Link } from "react-router-dom";

//import icons
import { IoIosStar } from "react-icons/io";
import SocialLinks from "../socialLinks/SocialLinks";

function TeamMember({ data }) {
  return (
    <MemberBox>
      <Link to={`/team/${data.id}`}>
        <div>
          <img src={data.image} alt={data.desc} />
        </div>

        <article>
          <h2>{data.name}</h2>
          <div>
            {[...Array(data.stars)].map((_, i) => (
              <IoIosStar key={i} color="gold" size={16} />
            ))}
          </div>
          <p>{data.desc}</p>
        </article>

        <SocialLinks />
      </Link>
    </MemberBox>
  );
}

export default TeamMember;
