import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Slideshow from "./pages/Slideshow/slideshow";
import Form from "./pages/Form/form";
import Footer from "./components/Footer/footer";
const images = [
  // "../images/finalproduct.png",
  // "../images/image.png",
  "../images/lawn.jpeg"
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
