import React from "react";

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  return (
    <div className="CheckoutProduct">
      <div className="checkout_info">
        <img src={image} alt="" />
        <div className="checkoutproduct_title">{title}</div>
        <div className="checkoutproduct_price>
            <small></small>
            <strong>{price}</strong>
        </div>
        
      </div>
    </div>
  );
};

export default CheckoutProduct;
