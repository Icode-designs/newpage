import styled from "styled-components";

export const FaqBox = styled.section`
  padding: 1.5rem;
  > div {
    max-width: 60.56rem;
    margin: 0 auto;
    article {
      max-width: 35.687rem;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 3rem;
    }

    div {
      display: grid;
      grid-template-columns: 1fr;
      details {
        padding: 1rem 0;
        height: fit-content;
        cursor: pointer;

        summary {
          list-style: none;
          font-size: 1.125rem;
          font-weight: 500;
          color: var(--col-30);
          display: flex;
          justify-content: space-between;
          height: fit-content;
        }

        span {
          color: var(--col-10);
          border: 1px solid var(--col-10);
          padding: 0.375rem;
          border-radius: 0.375rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: fit-content;
          margin-left: 1.5rem;
          .accordion-btn {
            transition: transform ease 0.5s;
          }
        }

        &[open] {
          span {
            color: var(--col-70);
            background-color: var(--col-10);
            .accordion-btn {
              transform: rotate(90deg);
            }
          }
        }

        p {
          margin-top: 1.25rem;
          line-height: 150%;
          color: var(--col-60);
          cursor: initial;
        }
      }
    }
  }
`;
