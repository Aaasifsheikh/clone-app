import React from "react";
import "./Product.css";
function Product({ id, title, price, rating }) {
  return (
    <div className="Product">
      <p>{title}</p>
      <p className="product__">
        <small>£</small>
        <strong>{</strong>
      </p>
    </div>
  );
}

export default Product;
