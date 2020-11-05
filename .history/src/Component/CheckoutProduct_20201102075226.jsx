import React from "react";
import "./Checkout.scss"

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  return (
    <div className="CheckoutProduct">
      <div className="checkout_info">
        <img src={image} alt="" />
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
        <button >Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
