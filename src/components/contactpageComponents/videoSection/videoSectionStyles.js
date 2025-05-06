import styled from "styled-components";

export const VideoBox = styled.section`
  padding: 5.625rem 1.5rem;
  > div {
    max-width: 73.125rem;
    margin: 0 auto;
    > div {
      margin: 0 auto;
      max-width: 60.625rem;
      height: fit-content;
      video {
        border-radius: 1.875rem;
        width: 100%;
        height: auto;
      }
    }
  }
`;
