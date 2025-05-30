import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/header";
import Slideshow from "./pages/Slideshow/slideshow";
import ServicesList from "./pages/ServicesList/serviceslist";
import Form from "./pages/Form/form";
import Footer from "./components/Footer/footer";

import Maintenance from "./pages/services/Maintenance";
import Native from "./pages/services/Native";
import Hardscape from "./pages/services/Hardscape";

import lawn2 from "./assets/lawn2.jpeg";
import lawn3 from "./assets/lawn3.jpg";
import lawn4 from "./assets/lawn4.jpg";
import lawn5 from "./assets/lawn5.jpg";
import lawn6 from "./assets/lawn6.jpg";

const images = [lawn2, lawn3, lawn4, lawn5, lawn6];

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <section id="home">
              <Header />
            </section>

            <Slideshow images={images} interval={45000} />

            <section id="services">
              <ServicesList />
            </section>

            <section id="contact">
              <Form />
            </section>

            <button
              className="back-to-top"
              aria-label="Back to Top"
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              ↑
            </button>
            <Footer />
          </div>
        }
      />

      <Route path="/services/maintenance" element={<Maintenance />} />
      <Route path="/services/nativeplants" element={<Native />} />
      <Route path="/services/hardscape" element={<Hardscape />} />
    </Routes>
  );
}

export default App;
