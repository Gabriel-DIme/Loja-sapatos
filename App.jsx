import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Header />
      <main>
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </main>
    </div>
  );
}

export default App;