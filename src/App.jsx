import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Slideshow from "./pages/Slideshow/slideshow";
import Form from "./pages/Form/form";
import Footer from "./components/Footer/footer";
import lawn1 from './assets/lawn.jpeg';
import lawn2 from './assets/lawn2.jpeg';
import lawn3 from './assets/lawn3.jpg';
import lawn4 from './assets/lawn4.jpg';

const images = [lawn1, lawn2, lawn3, lawn4];


function App() {
  return (
    <div>
      <Header />
      <Slideshow images={images} />
      {/* other sections of your site */}
      <Form />
      <Footer />
    </div>
  );
}

export default App;
