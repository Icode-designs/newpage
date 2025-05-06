import styled from "styled-components";

export const PackageOverviewBox = styled.section`
  padding: 8.125rem 1.5rem;
  padding-bottom: 0;

  > div {
    background-color: #e9edff;
    padding: 1.875rem;
    min-width: 17.875rem;
    border-radius: 1.25rem;
    width: 100%;
    max-width: 73.125rem;
    margin: 0 auto;
    h2 {
      font-size: 1.25rem;
      line-height: 120%;
      padding-bottom: 1.5rem;
      font-weight: 600;
      color: var(--col-30);
      border-bottom: 1px solid var(--col-10);
    }

    h1 {
      padding-top: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    padding: 9.75rem 1.5rem;
    padding-bottom: 0;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        padding: 1.5rem;
        padding-right: 3.125rem;
        border: none;
        border-right: 1px solid var(--col-10);
      }
      h1 {
        padding-left: 3.125rem;
      }
    }
  }
`;
