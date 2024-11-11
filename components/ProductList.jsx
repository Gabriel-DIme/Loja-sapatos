import React from "react";
import Product from "./Product";

const shoes = [
  { id: 1, name: "Tênis Esportivo", price: 150, image: "/path/to/image1.jpg" },
  { id: 2, name: "Bota Casual", price: 200, image: "/path/to/image2.jpg" },
  { id: 3, name: "Sapatênis", price: 180, image: "/path/to/image3.jpg" },
];

function ProductList({ addToCart }) {
  return (
    <section id="products">
      <h2>Nossos Produtos</h2>
      <div className="product-list">
        {shoes.map((shoe) => (
          <Product key={shoe.id} product={shoe} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
