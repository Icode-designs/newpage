import { createGlobalStyle } from "styled-components";

//global styles
export const GlobalStyles = createGlobalStyle`
  :root{
--col-10:#5D7AEC;
--col-20:#7C86AB;
--col-30:#121E4C;
--col-40:#000000;
--col-50:#4D4D4D;
--col-60:#666666;
--col-70:#FFFFFF;
--col-80:#FF9800;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background-color: #f8f9fb;
    overflow-y: ${({ menuOpen }) => (menuOpen ? "hidden" : "scroll")};
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style-type: none;
  }

  button{
  background: none;
  border: none;
  cursor: pointer;
  }

  @keyframes rT {
    0% {
      transform: scale(1.1);
      opacity: 0%;
    }

    100% {
      transform: scale(1);
      opacity: 100%;
    }
  }
`;
