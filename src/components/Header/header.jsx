import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

import treeLogo from "../../assets/cropped2.png";
import leaf1 from "../../assets/leaf1.png";
import leaf2 from "../../assets/leaf2.png";
import leaf3 from "../../assets/leaf3.png";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className="header-container" data-aos="fade-down">
      <div className="tree-logo-container">
        <img src={treeLogo} alt="Tree Logo" className="tree-logo" />
        <div className="falling-leaf leaf1"><img src={leaf1} alt="Leaf 1" /></div>
        <div className="falling-leaf leaf2"><img src={leaf2} alt="Leaf 2" /></div>
        <div className="falling-leaf leaf3"><img src={leaf3} alt="Leaf 3" /></div>
      </div>
      <br />
      <br />
      {/* 🔽 Navigation Bar */}
      <nav className="main-nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
