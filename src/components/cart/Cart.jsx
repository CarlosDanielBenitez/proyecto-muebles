import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <img src={product.src} alt={product.alt} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
