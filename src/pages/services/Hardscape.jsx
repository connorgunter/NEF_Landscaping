// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";

// import Header from "../../components/Header/header";
// import Footer from "../../components/Footer/footer";
// import "./hardscape.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import before1 from "../../assets/hard-before1.jpg";
// import after1 from "../../assets/afterhardscape1.jpg";
// import before2 from "../../assets/hard-before2.jpg";
// import after2 from "../../assets/afterhardscape2.jpeg";

// const Hardscape = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="hardscape-page">
//         <h1 className="hardscape-title">Hardscape Design & Build</h1>
//         <p className="hardscape-intro" data-aos="fade-up">
//           Hardscaping brings structure, style, and function to your outdoor
//           spaces. From elegant patios to custom fire pits and walkways, NEF
//           designs and builds beautiful, lasting features that transform your
//           landscape.
//         </p>

//         <div className="hardscape-benefits">
//           {[
//             {
//               icon: "🧱",
//               title: "Patios & Walkways",
//               desc: "Create inviting pathways and outdoor living spaces that blend with nature.",
//             },
//             {
//               icon: "🔥",
//               title: "Fire Pits",
//               desc: "Custom-built features to gather around with friends and family.",
//             },
//             {
//               icon: "🌳",
//               title: "Retaining Walls",
//               desc: "Functional and aesthetic support to shape and define your yard.",
//             },
//           ].map((item, idx) => (
//             <div
//               className="hardscape-benefit"
//               key={idx}
//               data-aos="fade-up"
//               data-aos-delay={idx * 100}
//             >
//               <span className="benefit-icon">{item.icon}</span>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="hardscape-concepts" data-aos="fade-up">
//           <h2>Popular Design Concepts</h2>
//           <div className="concepts-grid">
//             <div className="concept">
//               <h4>Natural Stone Patio</h4>
//               <p>Organic shapes, premium flagstone, and rustic vibes.</p>
//             </div>
//             <div className="concept">
//               <h4>Modern Fire Pit Area</h4>
//               <p>Sleek pavers, built-in seating, and night lighting.</p>
//             </div>
//             <div className="concept">
//               <h4>Tiered Garden Walls</h4>
//               <p>Retaining walls to level and frame planting beds.</p>
//             </div>
//           </div>
//         </div>

//         <div className="cta-wrapper" data-aos="zoom-in">
//           <Link to="/contact" className="cta-button">
//             Book a Hardscape Consultation
//           </Link>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Hardscape;
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./hardscape.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import before1 from "../../assets/beforehardscape1.jpg";
import after1 from "../../assets/afterhardscape1.jpg";
import before2 from "../../assets/beforehardscape2.jpg";
import after2 from "../../assets/afterhardscape2.jpeg";

const Hardscape = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <div className="hardscape-page">
        <h1 className="hardscape-title">Hardscape Design & Build</h1>

        <p className="hardscape-intro" data-aos="fade-up">
          Hardscaping brings structure, style, and function to your outdoor
          spaces. From elegant patios to custom fire pits and walkways, NEF
          designs and builds beautiful, lasting features that transform your
          landscape.
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
          {[
            { before: before1, after: after1 },
            { before: before2, after: after2 },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="before-after-container">
                <div className="before-after-image" data-label="Before">
                  <img
                    src={slide.before}
                    alt="Before hardscape project"
                    loading="lazy"
                  />
                </div>

                <div className="before-after-image" data-label="After">
                  <img
                    src={slide.after}
                    alt="After hardscape project"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hardscape-benefits">
          {[
            {
              icon: "🧱",
              title: "Patios & Walkways",
              desc: "Create inviting pathways and outdoor living spaces that blend with nature.",
            },
            {
              icon: "🔥",
              title: "Fire Pits",
              desc: "Custom-built features to gather around with friends and family.",
            },
            {
              icon: "🌳",
              title: "Retaining Walls",
              desc: "Functional and aesthetic support to shape and define your yard.",
            },
          ].map((item, idx) => (
            <div
              className="hardscape-benefit"
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

        <div className="hardscape-concepts" data-aos="fade-up">
          <h2>Popular Design Concepts</h2>
          <div className="concepts-grid">
            <div className="concept">
              <h4>Natural Stone Patio</h4>
              <p>Organic shapes, premium flagstone, and rustic vibes.</p>
            </div>
            <div className="concept">
              <h4>Modern Fire Pit Area</h4>
              <p>Sleek pavers, built-in seating, and night lighting.</p>
            </div>
            <div className="concept">
              <h4>Tiered Garden Walls</h4>
              <p>Retaining walls to level and frame planting beds.</p>
            </div>
          </div>
        </div>

        <div className="cta-wrapper" data-aos="zoom-in">
          <Link to="/contact" className="cta-button">
            Book a Hardscape Consultation
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hardscape;
