import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header/header";
import Slideshow from "./pages/Slideshow/slideshow";
import ServicesList from "./pages/ServicesList/serviceslist";
import Form from "./pages/Form/form";
import Footer from "./components/Footer/footer";
import ContactForm from "./components/ContactForm/ContactForm";

import Maintenance from "./pages/services/Maintenance";
import Native from "./pages/services/Native";
import Hardscape from "./pages/services/Hardscape";
import Contact from "./pages/Contact/Contact"; // ✅ New Contact page import

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

  const navigate = useNavigate();

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
            <div className="cta-intro" data-aos="fade-up">
              <h2>Interested in a custom maintenance plan?</h2>
              <p>
                Let NEF Landscaping take the work off your hands — get a free
                estimate tailored to your property’s needs.
              </p>
            </div>
            <div className="homepage-cta-wrapper">
              <button
                className="homepage-cta-button"
                onClick={() => navigate("/contact")}
              >
                Get a Free Estimate
              </button>
            </div>

            <section id="services">
              <ServicesList />
            </section>
            <ContactForm />

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
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
