import styled from "styled-components";

export const BookingFormBox = styled.section`
  form {
    max-width: 34rem;
    margin: 0 auto;
    margin-top: 3.687rem;
    label {
      margin-bottom: 0;
      text-transform: capitalize;
    }

    button {
      color: var(--col-70);
      display: flex;
      justify-self: center;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      margin-top: 2.5rem;
      transition: background-color ease 0.5s;

      &:hover {
        background-color: var(--col-30);
      }
    }
  }
`;

export const CheckBoxcontainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

  > fieldset {
    border: none;

    legend {
      margin-bottom: 0.635rem;
      font-size: 1rem;
      font-weight: 600;
    }
    > div {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 0.635rem;
      div {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 0.85rem;

        input {
          width: 1.125rem;
          height: 1.125rem;
        }
      }

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 4rem;
      }
    }
  }
`;

export const FormFeildContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

  > div {
    display: block;

    > * {
      display: inherit;
    }

    label {
      margin-bottom: 0.63rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 1.125rem;
      outline: none;
      border: 1px solid var(--col-60);
      border-radius: 0.25rem;
      background-color: transparent;
    }
  }
`;
