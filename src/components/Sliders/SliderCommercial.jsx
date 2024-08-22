// COMPONENTE REUTILIZABLE
import React from "react";
import SliderImages from "./SliderImages";
import "./sliderStyles.css";

const SliderCommercial = ({ images }) => {
  // Recibe el array como props
  return <SliderImages images={images} />;
};

export default SliderCommercial;
