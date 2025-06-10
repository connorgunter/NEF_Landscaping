import { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./maintenance.css";

import m1 from "../../assets/before1.jpg";
import m2 from "../../assets/after1.jpg";
import m3 from "../../assets/before2.jpg";
import m4 from "../../assets/after2.jpg";

const Maintenance = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);

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
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation
          autoplay={{ delay: 5000 }}
          className="before-after-carousel"
        >
          <SwiperSlide>
            <div className="before-after-container">
              <div className="before-after-image" data-label="Before">
                <img src={m1} alt="Before service" loading="lazy" />
              </div>
              <div className="before-after-image" data-label="After">
                <img src={m2} alt="After service" loading="lazy" />
              </div>
            </div>
            <p className="before-after-desc">
              Detailed cleanup for a refreshed landscape.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <div className="before-after-container">
              <div className="before-after-image" data-label="Before">
                <img src={m3} alt="Before service" loading="lazy" />
              </div>
              <div className="before-after-image" data-label="After">
                <img src={m4} alt="After service" loading="lazy" />
              </div>
            </div>
            <p className="before-after-desc">
              Transforming overgrown lawns into manicured spaces.
            </p>
          </SwiperSlide>
        </Swiper>
        <div className="offering-list">
          <div className="offering-item" data-aos="fade-up">
            <span className="offering-icon">🌱</span>
            <h3>Weekly Lawn Mowing & Edging</h3>
            <p>Consistent, clean cuts and crisp edges all season long.</p>
          </div>
          <div
            className="offering-item"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="offering-icon">✂️</span>
            <h3>Mulching, Pruning & Bed Maintenance</h3>
            <p>
              Keep garden beds tidy and plants healthy with professional care.
            </p>
          </div>
          <div
            className="offering-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="offering-icon">🍂</span>
            <h3>Spring & Fall Cleanups</h3>
            <p>
              Seasonal cleanups to prepare your landscape for changing weather.
            </p>
          </div>
          <div
            className="offering-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="offering-icon">❄️</span>
            <h3>Snow Plowing During Winter</h3>
            <p>Safe and reliable snow removal for driveways and walkways.</p>
          </div>
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
