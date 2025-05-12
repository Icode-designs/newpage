import styled from "styled-components";
import wlcm_img1 from "assets/welcome_image.jpg";
import wlcm_img2 from "assets/warehouse_cleaning.jpg";

//welcome section styles
export const WelcomeSectionBox = styled.section`
  padding: 4.375rem 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5.67rem;
    max-width: 73.125rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      > div:nth-of-type(1) {
      }

      > div:nth-of-type(2) {
      }
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      gap: 0;
      /* justify-content: space-between; */
      align-items: center;

      > * {
        max-width: 50%;
      }
    }
  }
`;

//qualities styles
export const QualitiesBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #f5f4f4;
  padding: 1rem;
  margin-bottom: 1.25rem;

  p {
    color: var(--col-40) !important;
    font-weight: 600;
  }
`;

export const WelcomeArticleContainer = styled.div`
  button {
    color: var(--col-70);
    margin-top: 1.875rem;
    display: flex;
    justify-self: center;
    justify-content: center;
  }

  article {
    margin-bottom: 2rem;
    p {
      line-height: 160%;
      letter-spacing: 0;
      color: var(--col-60);
    }
  }

  @media (min-width: 768px) {
    button {
      justify-self: left;
      transition: all ease 0.5s;
      &:hover {
        background-color: var(--col-30);
      }
    }
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1.2rem;
      max-width: 30.125rem;

      li {
        padding: 0.75rem 0.625rem;
        justify-content: left;
      }
    }
  }
`;

export const WelcomeImageContainer = styled.div`
  width: 18rem;
  width: 100%;
  height: 17.6594rem;
  position: relative;
  margin: 0 auto;

  &:hover {
    div {
      &:nth-of-type(1) {
        right: 0;
      }
      &:nth-of-type(2) {
        left: 0;
      }
    }
  }
  div {
    transition: all 0.5s ease;
    &:nth-of-type(1) {
      background-image: url(${wlcm_img1});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 14rem;
      height: 15.75rem;
      border-radius: 0.75rem;
      border-top: 6px solid var(--col-30);
      border-left: 6px solid var(--col-30);
      position: absolute;
      top: 0;
      right: 4rem;
      z-index: 15;
    }
    &:nth-of-type(2) {
      background-image: url(${wlcm_img2});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 9rem;
      height: 11.06rem;
      border-radius: 0.75rem;
      border: 6px solid var(--col-70);
      position: absolute;
      bottom: 0;
      left: 9rem;
      z-index: 15;
    }
  }

  @media (min-width: 768px) {
    width: 25rem;
    height: 27.625rem;

    div {
      &:nth-of-type(1) {
        width: 20rem;
        height: 22.625rem;
        right: 5rem;
      }
      &:nth-of-type(2) {
        width: 12rem;
        height: 14.5625rem;
        left: 13rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 25rem;

    div {
      &:nth-of-type(1) {
        width: 20rem;
        height: 22.625rem;
        right: 5rem;
      }
      &:nth-of-type(2) {
        width: 12.5rem;
        height: 14.5625rem;
        left: 12.5rem;
      }
    }
  }
`;
