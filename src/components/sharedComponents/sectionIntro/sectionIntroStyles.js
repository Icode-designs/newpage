import styled from "styled-components";

export const SectionIntroBox = styled.div`
  display: ${({ $introDisplay }) => $introDisplay || "unset"};
  margin-bottom: 2.5rem;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    > * {
      max-width: 27rem;
    }
  }
`;
