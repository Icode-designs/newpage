import styled from "styled-components";
import cta_img1 from "assets/sch_cleaning.jpg";
import cta_img2 from "assets/cta_image.jpg";

//CTA styles
export const CallBox = styled.section`
  padding: 4.06rem 1.5rem;
  overflow: hidden;
  > div {
    max-width: 73.125rem;
    margin: 0 auto;

    > article {
      margin-bottom: 2.5rem;
      > p {
        line-height: 120%;
        margin-bottom: 1.5rem;
      }
    }

    > div {
    }

    button {
      color: var(--col-70);
      transition: all ease 0.5s;

      &:hover {
        background-color: var(--col-30);
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      display: flex;
      position: relative;
      align-items: center;

      > * {
        max-width: 50%;
      }

      > article {
        margin: 8rem 0;

        button {
          margin: 0;
        }

        h1 {
          font-size: 2.75rem;
        }
      }

      > div {
        width: 20.4375rem;
        margin: 0 auto;
        margin-right: 0;
      }
    }
  }

  @media (min-width: 1100px) {
    .container {
      > div {
        width: 29.875rem;
        height: 26.3125rem;

        div {
          &:nth-of-type(1) {
            width: 14.437rem;
            height: 16.56rem;
          }
          &:nth-of-type(2) {
            width: 23.625rem;
            height: 23.625rem;
          }
        }
      }
    }
  }
`;

export const CtaImageContainer = styled.div`
  position: relative;
  max-width: 20.4375rem;
  height: 18.82rem;
  margin: 0 auto;
  margin-bottom: 3.75rem;

  &:hover {
    div {
      &:nth-of-type(1) {
        transform: rotate(-45deg);
      }
      &:nth-of-type(2) {
        transform: rotate(45deg);
      }
    }
  }
  div {
    position: absolute;
    transition: all 0.5s ease;
    &:nth-of-type(1) {
      background-image: url(${cta_img1});
      background-repeat: none;
      background-size: cover;
      background-position: center;
      width: 10.31rem;
      height: 11.875rem;
      border-radius: 0.89rem;
      border: 0.45rem solid var(--col-70);
      bottom: 0;
      left: 0;
      z-index: 20;
    }

    &:nth-of-type(2) {
      background-image: url(${cta_img2});
      background-repeat: none;
      background-size: cover;
      background-position: center;
      width: 15.9rem;
      height: 16.875rem;
      border-radius: 0.89rem;
      border-top: 0.45rem solid var(--col-30);
      border-right: 0.45rem solid var(--col-30);
      top: 0;
      right: 0;
      z-index: 15;
    }
  }
`;
