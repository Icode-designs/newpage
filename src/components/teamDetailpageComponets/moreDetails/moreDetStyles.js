import styled from "styled-components";

export const FullDetailbox = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3.125rem;
  article {
    max-width: 39rem;
    margin: 0 auto;
    h2 {
      text-transform: capitalize;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 150%;
      color: var(--col-30);
      margin-bottom: 1.25rem;
    }
    p {
      line-height: 150%;
      color: var(--col-60);
    }
  }
`;
