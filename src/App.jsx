import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Slideshow from "./pages/Slideshow/slideshow";
import Form from "./pages/Form/form";
import Footer from "./components/Footer/footer";
const images = [
  "../images/lawn2.jpeg",
  "../images/lawn.jpeg",
  "../images/lawn3.jpg",
  "../images/lawn4.jpg",

];

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
