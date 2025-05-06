import React from "react";
import { SocialPromptBox } from "./socialPromptStyles";
import Article from "components/sharedComponents/article/Article";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import SocialLinks from "components/sharedComponents/socialLinks/SocialLinks";

function SocialPrompt() {
  return (
    <SocialPromptBox>
      <div>
        <div></div>
        <div>
          <Article
            $headingCol="var(--col-30)"
            heading="Follow us on social media"
            desc="We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space."
          />
          <div>
            <p>@NewPage </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </SocialPromptBox>
  );
}

export default SocialPrompt;
