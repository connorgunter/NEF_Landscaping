import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./maintenance.css";

import m1 from "../../assets/before1.jpg";
import m2 from "../../assets/after1.jpg";
import m3 from "../../assets/before5.jpg";
import m4 from "../../assets/after5.jpg";
import m5 from "../../assets/before6.jpg";
import m6 from "../../assets/after6.jpg";

import mowing from "../../assets/maintenance2.jpg";
import plowing from "../../assets/maintenance.png";

const Maintenance = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120 });

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    {
      before: m1,
      after: m2,
      caption: "Detailed cleanup for a refreshed landscape.",
      showLabels: true,
    },
    {
      before: m3,
      after: m4,
      caption: "Transforming overgrown lawns into manicured spaces.",
      showLabels: true,
    },
    {
      before: m5,
      after: m6,
      caption: "From patchy and tired to clean, crisp, and cared for.",
      showLabels: true,
    },

    // mowing showcase
    {
      before: mowing,
      after: mowing,
      caption: "Professional weekly mowing keeps lawns healthy and sharp.",
      showLabels: false,
    },

    // plowing showcase
    {
      before: plowing,
      after: plowing,
      caption: "Reliable maintenance services year round!",
      showLabels: false,
    },
  ];

  return (
    <>
      <Header />

      <div className="service-detail">
        <h1>Maintenance Services</h1>

        <p className="intro">
          NEF provides complete landscape care so your property always looks its
          best. Our experienced team handles routine mowing, seasonal cleanups
          and everything in between.
        </p>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          navigation={!isMobile}
          autoplay={
            isMobile ? { delay: 3500, disableOnInteraction: false } : undefined
          }
          pagination={{ clickable: true }}
          className="before-after-carousel"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="before-after-container">
                <div
                  className="before-after-image"
                  {...(slide.showLabels ? { "data-label": "Before" } : {})}
                >
                  <img
                    src={slide.before}
                    alt="Landscape service"
                    loading="lazy"
                  />
                </div>

                <div
                  className="before-after-image"
                  {...(slide.showLabels ? { "data-label": "After" } : {})}
                >
                  <img
                    src={slide.after}
                    alt="Landscape service"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="before-after-desc">{slide.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="offering-list">
          {[
            {
              icon: "🌱",
              title: "Weekly Lawn Mowing & Edging",
              desc: "Consistent, clean cuts and crisp edges all season long.",
            },
            {
              icon: "✂️",
              title: "Mulching, Pruning & Bed Maintenance",
              desc: "Keep garden beds tidy and plants healthy with professional care.",
            },
            {
              icon: "🍂",
              title: "Spring & Fall Cleanups",
              desc: "Seasonal cleanups to prepare your landscape for changing weather.",
            },
            {
              icon: "❄️",
              title: "Snow Plowing During Winter",
              desc: "Safe and reliable snow removal for driveways and walkways.",
            },
          ].map((item, i) => (
            <div
              className="offering-item"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              key={i}
            >
              <span className="offering-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-wrapper" data-aos="zoom-in">
          <Link to="/contact" className="cta-button">
            Get a Free Estimate
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Maintenance;
