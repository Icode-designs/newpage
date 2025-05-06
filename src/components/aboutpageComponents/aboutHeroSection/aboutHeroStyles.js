import styled from "styled-components";
import aboutBg from "assets/studio_cleaning.jpg";

export const AboutHeroBox = styled.section`
  padding: 8.56rem 1.5rem;
  padding-bottom: 3.625rem;
  height: fit-content;
  > div {
    max-width: 73.125rem;
    margin: 0 auto;
    div {
      position: relative;
      .about-bg {
        background-image: url(${aboutBg});
        background-position: top;
        background-size: cover;
        height: 40.56rem;
        width: 100%;
        border-radius: 2.187rem;
        transform: scaleX(-1);
        max-width: 41.8125rem;
        margin-bottom: 3rem;
      }

      article {
        margin-bottom: 1.8rem;
        p {
          color: var(--col-60);
          margin-bottom: 1.75rem;
        }

        div {
          display: flex;
          flex-direction: column;
          width: fit-content;
          gap: 1.25rem;
          button {
            &:nth-of-type(1) {
              color: var(--col-70);
            }
          }

          @media (min-width: 768px) {
            flex-direction: row;
          }
        }
      }

      .achievements {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        > div {
          display: flex;
          justify-content: center;
          padding: 0.5rem;
          width: 13.187rem;
          border: 1px solid var(--col-10);
          border-radius: 0.625rem;
          gap: 0.875rem;
          background-color: var(--col-70);

          div {
            display: block;
            h2 {
              color: var(--col-30);
              font-size: 1.85rem;
            }

            p {
              font-size: 1.125rem;
              color: var(--col-60);
            }
            img {
              height: 1.5rem;
              width: 1.5rem;
            }
          }
        }

        @media (min-width: 768px) {
          flex-direction: row;
          gap: 1.25rem;
          position: absolute;
          top: 29.312rem;
          right: 1.5rem;
          left: auto;
        }

        @media (min-width: 1200px) {
          flex-direction: row;
          gap: 1.25rem;
          position: absolute;
          top: 29.312rem;
          margin-right: 0;
        }
      }
      @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.8rem;
      }
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 2.687rem;
  }
`;
