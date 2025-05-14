import styled from "styled-components";
import pricing_bg from "assets/pricing_bg.jpg";

//pricing section styles
export const PricingBox = styled.section`
  position: relative;
  height: fit-content;
  padding: 8.81rem 1.5rem;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    background-image: url(${pricing_bg});
    background-position: top;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 66%;
    z-index: 5;
  }
  &::after {
    content: "";
    display: block;
    background-color: var(--col-30);
    background-position: top;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 66%;
    z-index: 10;
    opacity: 93%;
  }

  > div {
    position: relative;
    z-index: 20;
    margin: 0 auto;
    max-width: 73.125rem;
  }

  article {
    text-align: center;
    color: var(--col-70);
    max-width: 34.4375rem;
    margin: 0 auto;
    margin-bottom: 3.125rem;
    p {
      font-size: 1.25rem;
      line-height: 120%;
      letter-spacing: 0;
      margin-bottom: 0.75rem;
      color: var(--col-70);
    }

    h1 {
      font-size: 2.1875rem;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 0;
    }
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding: 8.81rem 6.25rem;
  }
`;

//package styles
export const PackageBox = styled.div`
  padding: 1.875rem 1.3125rem;
  border-radius: 1.25rem;
  background-color: var(--col-70);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  display: grid;

  h2 {
    color: var(--col-40);
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  div {
    padding: 1.25rem 2.5rem;
    margin-bottom: 2.25rem;
    background-color: var(--col-30);
    border-radius: 1.25rem;
    h3 {
      color: var(--col-70);
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 120%;
      letter-spacing: 0;
    }
  }

  ul {
    list-style-type: disc;
    color: var(--col-60);
    margin-bottom: 2.25rem;
    padding: 0 1.5rem;
    li {
      line-height: 300%;
    }
  }

  a {
    button {
      align-self: end;
      justify-self: center;
    }
  }
`;

export const PackagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
