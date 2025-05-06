import styled from "styled-components";

export const FooterBox = styled.footer`
  background-color: var(--col-30);
  padding: 3.125rem 1.5rem;
  padding-bottom: 0;
  margin-top: 4.687rem;

  P {
    text-align: center;
    color: var(--col-70);
    line-height: 196%;
    font-weight: 400;
  }
  > div {
    max-width: 73.125rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
    padding-bottom: 4rem;

    .logo {
      justify-self: center;
    }
    > div {
      &:nth-of-type(1) {
        > div {
          &:nth-of-type(2) {
            margin-top: 2rem;
            p {
              line-height: 160%;
              font-weight: 200 !important;
            }
          }
        }
      }
    }

    .links {
      display: flex;
      gap: 2.5rem;
      flex-direction: column;
      ul {
        justify-self: center;
        text-align: center;
        color: var(--col-70);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        li {
          transition: color ease 0.3s;
          &:hover {
            color: var(--col-10);
          }
        }

        h3 {
          font-size: 1.25rem;
          font-weight: bold;
          line-height: 100% !important;
          letter-spacing: 0;
          margin-bottom: 0.75rem;
        }

        a {
          color: inherit;
        }
      }
    }

    form {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1.25rem;
      text-align: center;
      max-width: 18.187rem;
      width: 100%;
      margin: 0 auto;
      color: var(--col-70);
      h2 {
        font-weight: bold;
        font-size: 1.25rem;
      }
      input {
        background: none;
        border: 1px #9e9e9e solid;
        padding: 1rem;
        border-radius: 0.325rem;
        color: var(--col-70);
        outline: none;
      }
    }
    button {
      color: var(--col-70);
      border: 1px solid transparent;
      transition: all ease 0.5s;
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;

      &:hover {
        border: 1px solid var(--col-10);
        background-color: transparent;
        color: var(--col-10);
      }
    }
  }
  .copyright {
    border-top: solid 1px var(--col-70);
    padding-top: 2.5rem;
    padding-bottom: 1.25rem;
    display: flex;
    justify-content: center;
    p {
      text-align: center;
      width: fit-content;
    }
  }

  @media (min-width: 768px) {
    > div {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: auto;

      .logo {
        justify-self: left;
      }

      p {
        text-align: left;
      }

      .links {
        flex-direction: row;
        gap: 7.5rem;

        ul {
          text-align: left;
        }
      }

      form {
        text-align: left;
        margin-left: 0;

        button {
          justify-self: left;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
