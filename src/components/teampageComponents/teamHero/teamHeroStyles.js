import styled from "styled-components";

export const TeamHeroBox = styled.section`
  padding: 10rem 1.5rem;
  padding-top: 16rem;
  background-color: #e9edff;
  > div {
    article {
      text-align: center;
      max-width: 32.5rem;
      margin: 0 auto;

      h1 {
        font-size: 2.5rem;
        line-height: 136%;
        font-weight: 600;
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.125px;
        color: var(--col-60);
      }
    }
  }
`;
