import styled from "styled-components";

export const OverviewBow = styled.section`
  margin-bottom: 3rem;
  > div {
    > div {
      background-image: ${({ $image }) => `url(${$image})`};
      background-size: cover;
      background-position: top;
      height: 18.3rem;
      width: 18.3rem;
      margin: 0 auto;
      margin-bottom: 2.515rem;
      border-radius: 1.875rem;
    }
    article {
      width: 18.3rem;
      margin: 0 auto;
      p {
        line-height: 150%;
        &:nth-of-type(1) {
          color: var(--col-10);
        }
        &:nth-of-type(2) {
          color: var(--col-60);
          margin-bottom: 1.25rem;
        }
      }
      h2 {
        font-size: 2.2rem;
        color: var(--col-30);
        line-height: 120%;
        font-weight: 500;
      }
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
