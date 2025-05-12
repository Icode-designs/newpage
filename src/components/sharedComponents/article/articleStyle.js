import styled from "styled-components";

//customizable article
export const ArticleBox = styled.article`
  margin: 0;
  margin-bottom: 2.5rem;
  h2 {
    font-size: ${({ $headingSize }) => $headingSize || "1.25rem"};
    font-weight: 600;
    letter-spacing: 0;
    line-height: auto;
    margin-bottom: 0.75rem;
    color: ${({ $headingCol }) => $headingCol || "var(--col-40)"};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.125px;
    color: ${({ $descCol }) => $descCol || "var(--col-60)"};
  }
`;
