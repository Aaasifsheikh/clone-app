import React from "react";
import "./Product.css";
function Product({ id, title, price, rating }) {
  return (
    <div className="Product">
      <p>{title}</p>
      <p className="product__">
        <small>£</small>
        <strong>{price}</strong>

      </p>
      <div className=""
    </div>
  );
}

export default Product;
