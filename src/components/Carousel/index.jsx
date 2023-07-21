import React, { useState, useRef } from 'react';
import './Carousel.css'; // Assurez-vous de créer un fichier CSS pour styliser le carrousel

const images = [
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef();

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="carousel-container">
      <div className="arrow left-arrow" onClick={prevImage}>
        {"<"}
      </div>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        className={`carousel-image ${slideDirection}`}
        ref={carouselRef}
        onTransitionEnd={handleTransitionEnd}
      />
      <div className="arrow right-arrow" onClick={nextImage}>
        {">"}
      </div>
    </div>
  );
}

export default Carousel;
