import React from "react";
import Header from "./components/Header/header";
import Slideshow from "./pages/Slideshow/slideshow";
import Form from "./pages/Form/form";

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
    </div>
  );
}

export default App;
