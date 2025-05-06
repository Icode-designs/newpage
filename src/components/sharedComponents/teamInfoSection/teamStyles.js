import styled from "styled-components";

//team info styles
export const TeamInfoBox = styled.section`
  padding: ${({ $padding }) => $padding || "3.75rem 1.5rem"};
  background-color: ${({ $bg_col }) => $bg_col || "transparent"};
  > div {
    max-width: 73.125rem;
    margin: 0 auto;

    > ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(18.125rem, 1fr));
      grid-gap: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    > div {
      > ul {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;

//team member styles
export const MemberBox = styled.li`
  a {
    color: unset;
    > div {
      &:nth-of-type(1) {
        margin-bottom: 1.5rem;
        img {
          width: 100%;
          border-top-right-radius: 1.25rem;
          border-top-left-radius: 1.25rem;
        }
      }
    }

    article {
      margin-bottom: 1.25rem;
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: 0;
        margin-bottom: 1rem;
      }
      p {
        margin-top: 1rem;
        font-size: 1rem;
        line-height: 150%;
        color: var(--col-60);
      }
    }
  }
`;
