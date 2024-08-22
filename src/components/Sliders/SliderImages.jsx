import React, { useState, useEffect } from "react";
import "./sliderStyles.css";

const SliderImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efecto para cambiar automáticamente los slides
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para cambiar al slide correspondiente al hacer clic en un punto de paginación
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            id="slider-wrapper-box"
            key={index}
            className={
              index === currentIndex
                ? "slider-image active"
                : "slider-image hidden"
            }
          >
            <img src={image.src} alt={image.alt} />
            <div className="text-box">
              <h2 className="image-text">{image.title}</h2>
              <h4 className="image-text-first">{image.description}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderImages;
