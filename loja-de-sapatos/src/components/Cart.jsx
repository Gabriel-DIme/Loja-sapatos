import React from "react";

function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="cart">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - R$ {item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </section>
  );
}

export default Cart;