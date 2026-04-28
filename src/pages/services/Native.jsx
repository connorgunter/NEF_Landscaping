import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Slideshow from "../../components/Slideshow/slideshow";

import "./native.css";

import n1 from "../../assets/native1.jpg";
import n2 from "../../assets/native2.jpg";
import n3 from "../../assets/native3.jpg";
import n4 from "../../assets/native4.jpg";
import n5 from "../../assets/native5.jpg";
import n6 from "../../assets/native6.jpg";
import n7 from "../../assets/native7.jpg";

const Native = () => {
  const nativeSlides = [n1, n2, n3, n4, n5, n6, n7];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />
      <div className="native-page">
        <h1 className="native-title">Native Plant Landscaping</h1>

        <p className="native-intro" data-aos="fade-up">
          Native plants are the backbone of sustainable landscaping—requiring
          less water, supporting wildlife, and thriving naturally in our
          environment. At NEF, we help create thriving, low-maintenance gardens
          that support local ecosystems.
        </p>
        <div className="native-slideshow">
          <Slideshow images={nativeSlides} />
        </div>

        <div className="native-benefits">
          {[
            {
              title: "Low Maintenance",
              desc: "Thrives without constant watering or chemical fertilizers.",
              icon: "🌱",
            },
            {
              title: "Wildlife Habitat",
              desc: "Provides shelter and food for pollinators and birds.",
              icon: "🦋",
            },
            {
              title: "Saves Water",
              desc: "Perfectly adapted to local rainfall patterns.",
              icon: "💧",
            },
            {
              title: "Chemical-Free",
              desc: "No need for synthetic pesticides or herbicides.",
              icon: "🧪",
            },
          ].map((item, idx) => (
            <div
              className="native-benefit"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <span className="benefit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="native-examples" data-aos="fade-up">
          <h2>Example Garden Concepts</h2>

          <div className="examples-grid">
            <div className="example">
              <h4>Pollinator Garden</h4>
              <p>Milkweed, Echinacea, Bee Balm — a haven for butterflies 🐝</p>
            </div>

            <div className="example">
              <h4>Woodland Shade Garden</h4>
              <p>Wild ginger, Ferns, Red Columbine — peaceful and shady 🌳</p>
            </div>

            <div className="example">
              <h4>Drought-Tolerant Prairie</h4>
              <p>Little bluestem, Yucca, Coneflower — built for sun ☀️</p>
            </div>
          </div>
        </div>

        <div className="cta-wrapper" data-aos="zoom-in">
          <Link to="/contact" className="cta-button">
            Get a Native Landscape Quote
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Native;
