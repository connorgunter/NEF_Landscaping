import React from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      {images.map((img, index) => (
        <div key={index} className="gallery-item">
          <img src={img} alt={`Gallery ${index}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
