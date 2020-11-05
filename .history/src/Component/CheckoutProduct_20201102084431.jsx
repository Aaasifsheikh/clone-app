import React from "react";
import "./CheckoutP.scss";

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  return (
    <div className="CheckoutProduct">
        <img className="checkout_image" src={image} alt="" />
      <div className="checkout_info">
        <div className="checkoutproduct_title">{title}</div>
        <div className="checkoutproduct_price">
            <small></small>
            <strong>{price}</strong>
        </div>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
