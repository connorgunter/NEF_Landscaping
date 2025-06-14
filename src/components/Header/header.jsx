import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

import treeLogo from "../../assets/cropped2.png";
import leaf1 from "../../assets/leaf1.png";
import leaf2 from "../../assets/leaf2.png";
import leaf3 from "../../assets/leaf3.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header-container" data-aos="fade-down">
      <div className="header-background">
        <div className="tree-logo-container">
          <img src={treeLogo} alt="Tree Logo" className="tree-logo" />
          <div className="falling-leaf leaf1">
            <img src={leaf1} alt="Leaf 1" />
          </div>
          <div className="falling-leaf leaf2">
            <img src={leaf2} alt="Leaf 2" />
          </div>
          <div className="falling-leaf leaf3">
            <img src={leaf3} alt="Leaf 3" />
          </div>
        </div>

        {/* ✅ Restoring the spacing below the logo */}
        <br />
        <br />

        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <button
                className="nav-link-btn"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="nav-link-btn"
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className="nav-link-btn"
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
