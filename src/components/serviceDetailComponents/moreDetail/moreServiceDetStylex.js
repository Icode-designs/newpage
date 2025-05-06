import styled from "styled-components";

export const MoreServiceDetBox = styled.section`
  padding: 1.75rem 1.5rem;
  > div {
    max-width: 73.125rem;
    margin: 0 auto;

    > div {
      padding: 1.87rem;
      max-width: 39rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 3.125rem;
      background-color: var(--col-70);
      border-radius: 1.875rem;

      &:nth-of-type(2) {
        max-width: 20.5rem;
        width: 100%;
        background-color: #e9edff;
        display: block;
        margin-top: 1.87rem;
        height: fit-content;

        article {
          p {
            margin-bottom: 1rem;
            span {
              color: var(--col-40);
            }
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            transition: all ease 0.5s;
            cursor: pointer;

            .icon {
              transform: rotate(-45deg);
              color: var(--col-60);
              transition: all ease 0.5s;
            }

            &:hover {
              color: var(--col-70);
              background-color: var(--col-30);
              .icon {
                transform: none;
                color: var(--col-70);
              }
            }
          }
        }

        @media (min-width: 768px) {
          width: 29.3rem;
        }
      }

      article {
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

        ol {
          padding: 0 1rem;
          margin-top: 2.125rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 2.125rem;
          li {
            line-height: 150%;
          }
        }
      }
    }
    @media (min-width: 768px) {
      display: flex;
      gap: 2rem;
      justify-content: space-between;
    }
  }
`;

export const DetailsUlBox = styled.ul`
  list-style-type: disc;
  li {
    color: var(--col-60);
  }
`;
