import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.scss";
import useStateValue from "../StateProvider";
const CheckoutProduct = ({ id, title, price, image, rating }) => {
  const [{ basket }] = useStateValue();
  const RemoveFromBasket = (id,title,price,image,rating) => {
      // build to remove items from basket..
      dispatch({type:"Remove_From_Basket",
    item:{
      id:item.id,
      title:i
    }})
  };
  return (
    <div className="CheckoutProduct">
      <img className="checkout_image" src={image} alt="" />
      <div className="checkout_info">
        <div className="checkoutproduct_title">{title}</div>
        <div className="checkoutproduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={RemoveFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
