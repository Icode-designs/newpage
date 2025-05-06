import styled from "styled-components";

export const LogoBox = styled.div`
  a {
    color: unset;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      height: 3.125rem;
      margin-right: 0.5rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: -3px;
      color: ${({ $textColor }) => $textColor || "var(--col-30)"};
      span {
        color: ${({ $textColor }) => $textColor || "var(--col-40)"};
      }
    }
  }
`;
