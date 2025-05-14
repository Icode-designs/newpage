import { styled, css } from "styled-components";

const buttonType = {
  primary: css`
    background-color: var(--col-10);
    color: var(--col-70);
    border: 1px solid var(--col-10);

    &:hover {
      background-color: var(--col-30);
      border: 1px solid var(--col-30);
    }
  `,

  secondary: css`
    background-color: transparent;
    color: var(--col-60);
    border: 1px solid var(--col-60);

    &:hover {
      background-color: var(--col-10);
      color: var(--col-70);
      border: 1px solid var(--col-10);
    }
  `,
};

//Reusable button styles
export const ButtonBox = styled.button`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  line-height: auto;
  padding: 1rem 2.25rem;
  min-width: 12.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.5s;
  gap: 1rem;

  ${({ $color }) => buttonType[$color] || buttonType.primary}
`;
