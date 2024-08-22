import React from "react";
import "./gridServices.css";

const GridServices = () => {
  return (
    <div className="gallery-services-grid">
      <div className="titulados-containers">
        <h1>VISITÁ LAS CATEGORÍAS MÁS POPULARES.</h1>
      </div>

      <div className="services-grid-gallery">
        <div className="services-image-container">
          <img src="/images/sneaker-commercial.jfif" alt="Imagen 1" />
          <p className="image-text">ZAPATILLAS</p>
        </div>
        <div className="services-image-container">
          <img src="/images/futbol-commercial.jfif" alt="Imagen 2" />
          <p className="image-text">FUTBOL</p>
        </div>
        <div className="services-image-container">
          <img src="/images/pelota-commercial.jfif" alt="Imagen 3" />
          <p className="image-text">PELOTAS</p>
        </div>
        <div className="services-image-container">
          <img src="/images/calzas-commercial.jfif" alt="Imagen 4" />
          <p className="image-text">CALZAS</p>
        </div>
      </div>
    </div>
  );
};

export default GridServices;
