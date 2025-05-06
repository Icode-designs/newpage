import styled from "styled-components";

//Reusable button styles
export const ButtonBox = styled.button`
  background-color: ${({ $bg }) => $bg || "transparent"};
  border: ${({ $border }) => $border || "none"};
  font-size: ${({ $btnText }) => $btnText || "1rem"};
  font-weight: ${({ $btn_Weight }) => $btn_Weight || "600"};
  letter-spacing: ${({ $btn_Spacing }) => $btn_Spacing || "0"};
  line-height: ${({ $btn_height }) => $btn_height || "auto"};
  padding: 1rem 2.25rem;
  min-width: 12.5rem;
  border-radius: 0.375rem;
`;
