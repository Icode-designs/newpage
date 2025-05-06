import React from "react";
import { SocialLinksBox } from "./socialLinksStyles";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function SocialLinks() {
  return (
    <SocialLinksBox>
      <FaFacebookF color="black" size={16} />
      <FaXTwitter color="black" size={16} />
      <FaInstagram color="black" size={16} />
      <FaLinkedinIn color="black" size={16} />
    </SocialLinksBox>
  );
}

export default SocialLinks;
