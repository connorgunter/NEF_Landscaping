import React from "react";
import Header from "./components/Header/header";
import Slideshow from "./pages/Slideshow/slideshow";
import Form from "./pages/Form/form";

const images = [
  "../images/NEF_Landscaping_Logo.png",
  "../images/Sidewaystreefinaldraft.png"
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
