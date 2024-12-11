import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./Gallery.css";

const images = [
  {
    id: 1,
    title: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    shoeImage: "./shoes-slide.png",
    ornamentImage: "./Ornament-slide1.png",
    hasCaption: true,
  },
  {
    id: 2,
    shoeImage: "./home-slide-2.jpeg",
    hasCaption: false,
  },
  {
    id: 3,
    shoeImage: "./home-slide-3.jpeg",
    hasCaption: false,
  },
  {
    id: 4,
    shoeImage: "./home-slide-4.jpeg",
    hasCaption: false,
  },
  {
    id: 5,
    shoeImage: "./home-slide-5.jpeg",
    hasCaption: false,
  },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="gallery-container">
      <div
        className="carousel"
        onMouseEnter={(e) => e.currentTarget.classList.add("show-arrows")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("show-arrows")}
      >
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8592;
        </button>
        <div className="carousel-content">
          <img
            className={`shoe-image ${currentIndex === 0 ? "shoe-image-first" : ""} ${
              images[currentIndex].hasCaption ? "" : "full-image"
            }`}
            src={images[currentIndex].shoeImage}
            alt={`Slide ${currentIndex}`}
          />
          {images[currentIndex].hasCaption && (
            <div className="carousel-caption">
              <h6>Melhores ofertas personalizadas</h6>
              <h1 className="titleimg">{images[currentIndex].title}</h1>
              <p>{images[currentIndex].description}</p>
              <Link to="/product" className="buttton-link">
              <button className="button-ofertas">Ver ofertas</button>
              </Link>
            </div>
          )}
          {images[currentIndex].hasCaption && (
            <img
              className="ornamental"
              src={images[currentIndex].ornamentImage}
              alt="Ornamental"
            />
          )}
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleSelect(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
