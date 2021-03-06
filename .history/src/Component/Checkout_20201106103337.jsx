import React from "react";
import banner from "../Image/amaazon-ad.jpeg";
import { useStateValue } from "../StateProvider";
import "./Checkout.scss";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <React.Fragment>
      <header
    </React.Fragment>
    <div className="checkout">
      <div className="checkout_left">
        <img src={banner} className="checkout_ad" alt="not-found" />
        {basket?.length === 0 ? (
          <div className="">
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your shopping basket, to buy one or more
              items, click "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
          
        </div>
      )}
    </div>
  );
};

export default Checkout;
