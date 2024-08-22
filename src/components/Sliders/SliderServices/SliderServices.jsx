import React from "react";
import useSlider from "../useSlider";
import "./sliderServices.css";

const SliderServices = ({ services }) => {
  const { currentIndex } = useSlider(0, services);

  return (
    <div className="slider-container servicesSliderComponent">
      <div className="slider-wrapper">
        {services.map((service, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? "slider-image active"
                : "slider-image hidden"
            }
          >
            <img src={service.src} alt={service.alt} />
            <div className="image-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {services.map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderServices;
