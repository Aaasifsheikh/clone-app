import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Product.scss";
import { useStateValue } from "../StateProvider";
function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addTobasket = () => {
    // add item to basket
    dispatch({
      type: "Add_To_Basket",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product_image" />
      <NavLink to="">
        <button className="product_button" onClick>Add to basket</button>
      </NavLink>
    </div>
  );
}

export default Product;
