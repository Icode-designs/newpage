import styled from "styled-components";

export const ServiceOverviewBox = styled.section`
  padding: 9rem 1.5rem;
  padding-bottom: 3.8125rem;
  background-color: var(--col-70);
  > div {
    max-width: 73.125rem;
    margin: 0 auto;
    > div {
      background-image: ${({ $image }) => `url(${$image})`};
      background-size: cover;
      background-position: center;
      height: 41.625rem;
      width: 100%;
      border-radius: 1.875rem;
      margin: 0 auto;
      margin-bottom: 1.5rem;
      max-width: 31.25rem;
      min-width: 17rem;
    }

    article {
      margin: 0 auto;
      max-width: 31.25rem;
      h2 {
        color: var(--col-30);
        line-height: 115%;
        text-transform: capitalize;
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1.25rem;

        @media (min-width: 768px) {
          font-size: 3.25rem;
        }
      }
      p {
        line-height: 195%;
        font-weight: 300;
        font-size: 1.125rem;
        color: var(--col-60);
        margin-bottom: 2.5rem;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background-color: var(--col-10);
        color: var(--col-70);
        transition: color ease 0.5s;

        .SD-icon {
          transform: rotate(-45deg);
          transition: transform ease 0.5s;
        }

        &:hover {
          background-color: var(--col-30);
          .SD-icon {
            transform: rotate(0);
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;

      > * {
        max-width: 50%;
      }
    }
  }
`;
