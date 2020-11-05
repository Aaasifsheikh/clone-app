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
      <div className="product_rating">
          {
              Array(rating)
          }
      </div>
    </div>
  );
}

export default Product;
