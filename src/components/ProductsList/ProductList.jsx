import React from "react";
import ProductsData from "../../data/ProductsData";
import ProductCard from "../card/ProductCard";

const ProductList = () => {
  const handleAddToCart = (product) => {
    // Lógica para agregar al carrito
    console.log("Agregado al carrito:", product);
  };

  return (
    <div className="product-list">
      {ProductsData.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
//* mostrar
