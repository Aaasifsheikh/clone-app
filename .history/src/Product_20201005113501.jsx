import React from "react";
import "./Product.css";
function Product({ id, title, price, rating, image }) {
  return (
    <div className="Product">
    <div className=""
      <p>{title}</p>
      <p className="product__">
        <small>£</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>🌟</p>
          ))}
      </div>
      <img src={image} alt="" className="product_image" />
      <button className="product_button">Add to basket</button>
    </div>
  );
}

export default Product;
