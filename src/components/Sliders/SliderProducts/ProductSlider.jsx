import React, { useState, useEffect } from "react";
import ProductCard from "../../card/ProductCard";
import "./productSlider.css";

const ProductSlider = ({ products }) => {
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
    <div className="product-slider-container">
      <div className="product-slider-wrapper">
        {products.map((product, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? "product-slider-image active"
                : "product-slider-image hidden"
            }
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="product-pagination">
        {products.map((_, index) => (
          <div
            key={index}
            className={
              index === currentIndex ? "product-dot active" : "product-dot"
            }
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
