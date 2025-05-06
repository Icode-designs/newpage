import styled from "styled-components";
import serviceHero_bg from "assets/sch_cleaning.jpg";

export const ServicesHeroBox = styled.section`
  background-image: url(${serviceHero_bg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 45.625rem;
  padding: 17.375rem 1.5rem;

  > div {
    max-width: 73.125rem;
    margin: 0 auto;

    article {
      text-align: center;
      max-width: 32.5rem;
      margin: 0 auto;
      h2 {
        color: var(--col-70);
      }
      p {
        color: var(--col-70);
        line-height: 1.875rem;
      }
    }
  }

  @media (min-width: 768px) {
    height: 34.75rem;
    padding: 12.875rem 1.5rem;
    padding-top: 19.125rem;
  }
`;
