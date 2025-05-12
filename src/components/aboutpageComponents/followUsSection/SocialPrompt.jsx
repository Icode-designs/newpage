import React from "react";

//components
import Article from "components/sharedComponents/article/Article";
import SocialLinks from "components/sharedComponents/socialLinks/SocialLinks";

//styles
import { AboutpageSectionInnerBox } from "../aboutpageGenStyles";
import { PromptImage, SocialPromptBox } from "./socialPromptStyles";

function SocialPrompt() {
  const articleDetails = {
    heading: "Follow us on social media",
    desc: "We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space.",
  };

  const customStyles = { $headingCol: "var(--col-30)" };

  return (
    <SocialPromptBox>
      <AboutpageSectionInnerBox>
        <PromptImage></PromptImage>
        <div>
          <Article articleDetails={articleDetails} {...customStyles} />
          <div>
            <p>@NewPage </p>
            <SocialLinks />
          </div>
        </div>
      </AboutpageSectionInnerBox>
    </SocialPromptBox>
  );
}

export default SocialPrompt;
