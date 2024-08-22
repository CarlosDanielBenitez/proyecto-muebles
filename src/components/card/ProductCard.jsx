import React from "react";
import "./productCard.css";

const ProductCard = ({ product, currentIndex }) => {
  const { src, alt, title, description } = product;

  const handleAddToCart = () => {
    // Agrega aquí la lógica para añadir al carrito si es necesario
  };

  return (
    <div
      className={`product-card-container ${currentIndex === 0 ? "active" : ""}`}
    >
      <div className={`product-card ${currentIndex === 0 ? "active" : ""}`}>
        <img src={src} alt={alt} />
        <h2>{title}</h2>
        <p>$ {description}</p>
        <button onClick={handleAddToCart}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;
