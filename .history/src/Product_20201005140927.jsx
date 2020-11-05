import React, { useState } from "react";
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
      <button className="product_button" >Add to basket</button>
    </div>
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
      <button className="product_button" >Add to basket</button>
    </div>
  );
}

export default Product;
