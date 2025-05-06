import styled from "styled-components";

export const PlanIntroBox = styled.section`
  padding: 3.125rem 1.5rem;
  > div {
    padding: 1.875rem;
    background-color: var(--col-70);
    border-radius: 1.875rem;
    min-width: 20rem;
    width: 100%;
    max-width: 73.125rem;
    margin: 0 auto;
    > div {
      max-width: 30.625rem;
    }
    h1 {
      line-height: 150%;
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 0;
      color: var(--col-30);
      margin-bottom: 1.25rem;
    }
    p {
      line-height: 150%;
      color: var(--col-60);
    }

    ul {
      margin-top: 1.5rem;

      padding: 0 1rem;
      list-style: disc;
      color: var(--col-60);
    }
  }
`;
