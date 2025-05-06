import styled from "styled-components";

export const ContactSectionBox = styled.section`
  padding: 2.31rem 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    max-width: 73.125rem;
    margin: 0 auto;
    justify-content: space-between;

    > div {
      &:nth-of-type(1) {
        article {
          margin-bottom: 2.31rem;
          p {
            letter-spacing: 0;
            line-height: 120%;

            &:nth-of-type(2) {
              color: var(--col-60);
            }
          }
        }
        @media (min-width: 768px) {
          order: 2;
        }
      }
    }
  }

  @media (min-width: 768px) {
    > div {
      flex-direction: row;
      align-items: end;
      > * {
        max-width: 50%;
      }
    }
  }
`;

export const FormBox = styled.form`
  display: grid;
  grid-row-gap: 1.8rem;
  grid-template-columns: 1fr;

  input,
  textarea {
    padding: 1.125rem 1.25rem;
    border: none;
    border-radius: 0.36rem;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    outline: none;
  }

  button {
    width: 11.687rem;
    color: var(--col-70);
    transition: all ease 0.5s;

    &:hover {
      background-color: var(--col-30);
    }
  }
`;

export const FindusBox = styled.div`
  max-width: 37.5rem;
  width: 100%;

  > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }

  a {
    cursor: pointer;
  }

  .findUs-banner {
    display: flex;
    gap: 0.375rem;
    background-color: #fbfbfb;
    border-radius: 0.375rem;
    padding: 0.721rem;

    div {
      &:nth-of-type(2) {
        display: grid;
        grid-gap: 0.75rem;

        h3 {
          font-weight: 600;
          letter-spacing: 3%;
        }
        p {
          font-size: 0.875rem;
        }
      }
    }
  }

  .findUs-icon {
    background-color: var(--col-30);
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    order: 1;
  }
`;
