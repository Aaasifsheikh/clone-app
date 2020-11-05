import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
function Product({ id, title, price, rating, image }) {
  // const [add, setAdd] = useState(0);
  // const addBasket =()=>{
  //     setAdd(add + 1)

  // console.log(add);
  // };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
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
      </div>
      <img src={image} alt="" className="product_image" />
      <NavLink to="/che">
        <button className="product_button">Add to basket</button>{" "}
      </NavLink>
    </div>
  );
}

export default Product;
