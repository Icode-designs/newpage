import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import Header from "components/sharedComponents/header/Header";
import Homepage from "pages/Homepage";
import AboutPage from "pages/AboutPage";
import ServicesPage from "pages/ServicesPage";
import ContactPage from "pages/ContactPage";
import TeamPage from "pages/TeamPage";
import Bookingpage from "pages/Bookingpage";
import TeamDetailPage from "pages/TeamDetailPage";
import ServiceDetailpage from "pages/ServiceDetailpage";
import PackageDetailspage from "pages/PackageDetailspage";
import Footer from "components/sharedComponents/footer/Footer";

//global styles
const GlobalStyles = createGlobalStyle`
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

function App() {
  const [menuOpen, setMenuOPen] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyles menuOpen={menuOpen} />
      <Header menuOpen={menuOpen} setMenuOPen={setMenuOPen} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/booking" element={<Bookingpage />} />
        <Route path="/team/:id" element={<TeamDetailPage />} />
        <Route path="/services/:id" element={<ServiceDetailpage />} />
        <Route path="/package/:id" element={<PackageDetailspage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
