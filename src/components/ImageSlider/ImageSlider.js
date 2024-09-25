import React, { useState, useEffect } from "react";

import "./ImageSlider.css";  // For styling

const ImageSlider = () => {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
    "https://via.placeholder.com/600x400?text=Image+5",
    "https://via.placeholder.com/600x400?text=Image+6",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      
      {images.map((image, index) => (
        <div
          className={index === currentIndex ? "slide active" : "slide"}
          key={index}
        >
          {index === currentIndex && <img src={image} alt="slider" className="image" />}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
