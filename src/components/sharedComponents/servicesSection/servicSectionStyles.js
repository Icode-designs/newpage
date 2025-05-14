import styled from "styled-components";

// Create a styled div that can forward refs
export const ScrollContainer = styled.div`
  display: ${({ $scrollDisplay }) => $scrollDisplay || "flex"};
  grid-template-columns: ${({ $gridColumn }) => $gridColumn || "unset"};
  border-top: ${({ $topBorder }) => $topBorder || "unset"};
  padding-top: ${({ $topPadding }) => $topPadding || "unset"};
  max-width: ${({ $scrollMaxWidth }) => $scrollMaxWidth || "unset"};
  margin: 0 auto;
  overflow-x: auto;
  gap: 1.5rem;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ServiceSectionBox = styled.section`
  position: relative;
  padding: 2.81rem 1.5rem;
  padding-bottom: 1.8rem;
  max-width: 73.125rem;
  margin: 0 auto;

  > div:first-of-type {
    h1 {
      text-align: ${({ $headingAlign }) => $headingAlign || "unset"};
      width: ${({ $headingWidth }) => $headingWidth || "unset"};
      margin: ${({ $headingMargin }) => $headingMargin || "unset"};
    }

    article {
      display: ${({ $articleDisplay }) => $articleDisplay || "block"};
    }
  }

  .arrow-icon {
    position: absolute;
    top: 62%;
    font-size: 1.5rem;
    background-color: var(--col-30);
    color: var(--col-70);
    padding: 0.5rem;
    border-radius: 100%;
    display: ${({ $navDisplay }) => $navDisplay || "flex"};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    border: none;
    outline: none;
    opacity: 70%;
    transition: all 0.5s ease;

    &:hover {
      opacity: 100%;
    }
  }
  .icon--right {
    right: 1.5rem;
  }
  .icon--left {
    left: 1.5rem;
  }

  @media (min-width: 768px) {
    > div {
      &:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        > * {
          max-width: 27rem;
        }
      }
    }
  }
`;

//service content styles
export const ServiceContentBox = styled.div`
  > div {
    width: ${({ $contentWidth }) => $contentWidth || "20.25rem"};
    display: grid;

    article {
      height: 9.0625rem;
      position: relative;
      h1 {
        font-weight: 600;
        font-size: 1.5rem;
        letter-spacing: 0;
        line-height: 120%;
        margin-bottom: 0.96rem;
        text-transform: capitalize;
      }

      p {
        font-weight: 400;
        font-size: 0.96rem;
        line-height: 150%;
        letter-spacing: 0;
        margin-bottom: 1.5rem;
        color: var(--col-60);
      }
    }

    a {
      button {
        align-self: end;
        .icon {
          transform: rotate(-45deg);
          color: var(--col-60);
          transition: all ease 0.5s;
        }

        &:hover {
          .icon {
            transform: none;
            color: var(--col-70);
          }
        }
      }
    }
  }
`;

export const ServiceImage = styled.div`
  margin-bottom: 0.96rem;
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 15.77rem;
  border-radius: 1.81rem;
`;
