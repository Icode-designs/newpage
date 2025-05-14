import styled from "styled-components";
import hero_bg from "assets/hero_bg.jpg";

export const HeroBox = styled.section`
  background-image: url(${hero_bg});
  background-size: cover;
  background-position: top;
  height: fit-content;
  position: relative;
  padding: 18.5rem 1.5rem;
  padding-bottom: 4.93rem;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--col-40);
    opacity: 40%;
  }

  > div {
    margin: 0 auto;
    max-width: 73.125rem;
  }

  @media (min-width: 1024px) {
    padding-top: 12.25rem;
  }
`;

export const HeroContentBox = styled.div`
  position: relative;
  z-index: 15;
  color: var(--col-70);
  margin: 0 auto;
  margin-left: 0;
  max-width: 38.125rem;
  p {
    color: inherit;
    &:nth-of-type(1) {
      font-size: 1.25rem;
      line-height: 120%;
      margin-bottom: 1.25rem;
    }
    &:nth-of-type(2) {
      font-size: 1.125rem;
      line-height: 1.875rem;
      margin-bottom: 1.25rem;
    }
  }
  h2 {
    line-height: 115%;
    letter-spacing: 0;
    margin-bottom: 1.25rem;
  }

  > div {
    display: grid;
    grid-gap: 1.25rem;
    width: fit-content;

    > a {
      color: unset;
      > button {
        color: var(--col-70);
        cursor: pointer;
        transition: all 0.5s ease;
      }

      &:nth-of-type(2) {
        button {
          border-color: var(--col-10);
          &:hover {
            background-color: var(--col-10);
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.25rem;
    }
    > div {
      display: flex;
      gap: 1.25rem;
    }
  }
`;
