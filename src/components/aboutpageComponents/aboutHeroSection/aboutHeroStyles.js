import styled from "styled-components";
import aboutBg from "assets/studio_cleaning.jpg";

export const AboutHeroBox = styled.section`
  padding: 8.56rem 1.5rem;
  padding-bottom: 3.625rem;
  height: fit-content;
  > div {
    > div {
      position: relative;

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

export const AboutBg = styled.div`
  background-image: url(${aboutBg});
  background-position: top;
  background-size: cover;
  height: 40.56rem;
  width: 100%;
  border-radius: 2.187rem;
  transform: scaleX(-1);
  max-width: 41.8125rem;
  margin-bottom: 3rem;
`;

export const AchievementBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 13.187rem;
  border: 1px solid var(--col-10);
  border-radius: 0.625rem;
  gap: 0.875rem;
  background-color: var(--col-70);

  div {
    margin: 0 auto;
    &:nth-of-type(1) {
      img {
        height: 1.5rem;
        width: 1.5rem;
      }
    }
    &:nth-of-type(2) {
      display: block;
      h2 {
        color: var(--col-30);
        font-size: 1.85rem;
      }

      p {
        font-size: 1.125rem;
        color: var(--col-60);
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 1.25rem;
  margin-bottom: 1.87rem;

  a {
    button {
      min-width: max-content;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AchievementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.25rem;
    position: absolute;
    top: 29.312rem;
    right: 1.5rem;
    left: auto;
  }

  @media (min-width: 1200px) {
    margin-right: 0;
  }
`;

export const AboutHeroArticleBox = styled.article`
  margin-bottom: 1.8rem;
  p {
    color: var(--col-60);
    margin-bottom: 1.75rem;
  }
`;
