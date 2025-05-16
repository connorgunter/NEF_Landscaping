import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Slideshow from "./pages/Slideshow/slideshow";
import Form from "./pages/Form/form";
import Footer from "./components/Footer/footer";
// import lawn1 from './assets/lawn.jpeg';
import lawn2 from './assets/lawn2.jpeg';
import lawn3 from './assets/lawn3.jpg';
import lawn4 from './assets/lawn4.jpg';
import lawn5 from './assets/lawn5.jpg';
import lawn6 from './assets/lawn6.jpg';



const images = [lawn2, lawn3, lawn4, lawn5, lawn6];


function App() {
  return (
    <div>
      <section id="home">
      <Header />
      </section>
      <Slideshow images={images} interval={45000}/>
      {/* other sections of your site */}
      <section id="contact">
      <Form />
      </section>
      <a href="#home" className="back-to-top" aria-label="Back to Top">↑</a>

      <Footer />
    </div>
  );
}

export default App;
