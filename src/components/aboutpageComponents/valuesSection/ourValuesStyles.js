import styled from "styled-components";

export const OurValueBox = styled.section`
  padding: 2.812rem 1.5rem;
  > div {
    max-width: 73.125rem;
    margin: 0 auto;
    > div {
      &:nth-of-type(1) {
        text-align: center;
        p {
          line-height: 1.8rem;
          font-size: 1.25rem;
          color: var(--col-60);
          margin-bottom: 3.125rem;
        }
      }

      &:nth-of-type(2) {
        display: grid;
        grid-gap: 1.25rem;
        @media (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1200px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding: 7.375rem 1.5rem;
  }
`;

export const ValueBox = styled.div`
  padding: 1.5rem 2.1875rem;
  border-radius: 1.8rem;
  display: grid;
  gap: 1.125rem;
  grid-template-columns: 1fr !important;
  border: 1px solid var(--col-50);
  text-align: center;
  p {
    color: var(--col-60);
    line-height: 140%;
    margin-top: 0.5rem;
  }
`;
