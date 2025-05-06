import styled from "styled-components";
import wlcm_img1 from "assets/welcome_image1.jpg";
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

    article {
      margin-bottom: 2rem;
      p {
        line-height: 160%;
        letter-spacing: 0;
        color: var(--col-60);
      }
    }

    > div:nth-of-type(1) {
      max-width: 21.375rem;
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
          width: 14.625rem;
          height: 15.75rem;
          border-radius: 0.75rem;
          border-top: 6px solid var(--col-30);
          border-left: 6px solid var(--col-30);
          position: absolute;
          top: 0;
          right: 6.76rem;
          z-index: 15;
        }
        &:nth-of-type(2) {
          background-image: url(${wlcm_img2});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 9.625rem;
          height: 11.06rem;
          border-radius: 0.75rem;
          border: 6px solid var(--col-70);
          position: absolute;
          bottom: 0;
          left: 8rem;
          z-index: 15;
        }
      }
    }

    > div:nth-of-type(2) {
      button {
        color: var(--col-70);
        margin-top: 1.875rem;
        display: flex;
        justify-self: center;
        justify-content: center;
      }
    }
    @media (min-width: 768px) {
      > div:nth-of-type(1) {
        max-width: 25.08rem;
        width: 100%;
        height: 27.625rem;

        div {
          &:nth-of-type(1) {
            width: 20.875rem;
            height: 22.625rem;
            right: 4.562rem;
          }
          &:nth-of-type(2) {
            width: 12.4375rem;
            height: 14.5625rem;
            left: 13rem;
          }
        }
      }

      > div:nth-of-type(2) {
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
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > div:nth-of-type(1) {
        margin: 0;
      }

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
