import styled from "styled-components";
import hero_bg from "assets/hero_bg.jpg";

//header styles
export const Headerbox = styled.header`
  width: 100%;
  position: fixed;
  padding: 1rem 1.5rem;
  background-color: var(--col-70);
  top: 0;
  left: 0;
  z-index: 50;
  > div {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 73.125rem;

    nav {
      display: none;
    }

    .active-menu {
      transform: translateX(0%);
    }

    menu {
      display: block;
      background-image: url(${hero_bg});
      background-size: cover;
      background-position: center;
      position: absolute;
      width: 100%;
      min-height: 100vh;
      top: 5.125rem;
      left: 0;
      z-index: 45;
      padding-top: 1.375rem;
      transform: ${({ $menuopen }) => !$menuopen && "translateX(100%)"};
      transition: all ease 0.5s;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        filter: brightness(40%);
        z-index: -1;
      }

      a {
        li {
          padding: 1.375rem 1.5rem;
          font-size: 1.75rem;
          font-weight: bold;
          line-height: auto;
          letter-spacing: 0;
          color: var(--col-70);
          border-bottom: 1px solid var(--col-70);

          &:nth-of-type(5) {
            border-bottom: none;
          }
        }
      }

      button {
        margin: 1.5rem;
        margin-top: 3rem;
      }
    }

    .menu_btn {
      font-size: 2.7rem;
      display: flex;
      align-items: center;
      font-weight: 900;
      transition: all 0.5s ease;

      &:hover {
        background-color: var(--col-30);
        cursor: pointer;
      }
    }
  }

  .active-link {
    color: var(--col-10);
  }

  @media (min-width: 1024px) {
    > div {
      nav {
        display: flex;
        gap: 5.5rem;
        align-items: center;
        ul {
          display: flex;
          align-items: center;
          font-size: 1rem;
          gap: 1rem;
          a {
            text-decoration: none;
            color: var(--col-40);
          }

          li {
            &:hover {
              color: var(--col-10);
              cursor: pointer;
            }
          }
        }

        button {
          color: var(--col-70);
          transition: all 0.5s ease;

          &:hover {
            background-color: var(--col-30);
            cursor: pointer;
          }
        }
      }
      menu {
        display: none;
      }

      .menu_btn {
        display: none;
      }
    }
  }
`;
