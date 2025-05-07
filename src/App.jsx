import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import ScrollToTop from "utils/ScrollToTop";
import { GlobalStyles } from "utils/GlobalStyles";

function App() {
  const [menuOpen, setMenuOPen] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyles menuOpen={menuOpen} />
      <Header menuOpen={menuOpen} setMenuOPen={setMenuOPen} />
      <ScrollToTop />
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
