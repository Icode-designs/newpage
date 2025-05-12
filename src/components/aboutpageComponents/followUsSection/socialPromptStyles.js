import styled from "styled-components";
import socialPrompt_img from "assets/social_prompt.jpg";

export const SocialPromptBox = styled.section`
  padding: 4.687rem 1.5rem;
  margin-bottom: 6.375rem;
  > div {
    > div {
      margin: 0 auto;

      &:nth-of-type(2) {
        max-width: 33.25rem;
        padding: 2rem;
        background-color: var(--col-70);
        border-radius: 1.875rem;
        > div {
          padding-top: 1.812rem;
          border-top: 1px solid var(--col-60);

          p {
            line-height: 150%;
            font-weight: bold;
            color: var(--col-30);
            font-size: 0.875rem;
            margin-bottom: 0.375rem;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    > div {
      > div {
        &:nth-of-type(2) {
          position: relative;
          transform: translateY(-4rem);
        }
      }
    }
  }

  @media (min-width: 1200px) {
    > div {
      display: flex;
      align-items: center;
      > div {
        &:nth-of-type(2) {
          padding: 2rem;
          position: relative;
          transform: translateX(-4rem);
          border-radius: 1.875rem;
        }
      }
    }
  }
`;

export const PromptImage = styled.div`
  background-image: url(${socialPrompt_img});
  background-position: center;
  background-size: cover;
  height: 26.625rem;
  width: 100%;
  max-width: 48.3125rem;
  border-radius: 1.875rem;
  margin-bottom: 2.5rem;
`;
