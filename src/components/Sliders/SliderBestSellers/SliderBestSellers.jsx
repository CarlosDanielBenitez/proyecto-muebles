import React, { useState, useEffect } from "react";
import ProductCard from "../../card/ProductCard";
import "./sliderBestSellers.css";
import "../../Sliders/SliderProducts/productSlider.css";

const SliderBestSellers = ({ products, titulo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="homeSliderProductsBestSellers product-slider-container">
      <div className="homeSliderProductsBestSellers titulados-containers">
        <h1 className="">{titulo}</h1>
      </div>
      <div className="homeSliderProductsBestSellers product-slider-wrapper">
        <div className="arrows-cards">{"<"}</div>
        {products.map((product, index) => (
          <div
            key={index}
            className="homeSliderProductsBestSellers product-slider-image"
          >
            <ProductCard product={product} currentIndex={currentIndex} />
          </div>
        ))}
        <div className="arrows-cards">{">"}</div>
      </div>
      <div className="homeSliderProductsBestSellers product-pagination">
        {products.map((_, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? "homeSliderProductsBestSellers product-dot active"
                : "homeSliderProductsBestSellers product-dot"
            }
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderBestSellers;
