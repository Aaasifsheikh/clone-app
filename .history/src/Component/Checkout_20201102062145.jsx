import React from "react";
import banner from "../Image/amaazon-ad.jpeg";
import { useStateValue } from "../StateProvider";
import './Checkout.scss'
const Checkout = () => {
  const [{ dispatch }] = useStateValue();
  return (
    <div className="checkout">
      <img src={banner} className="checkout_ad" alt="not-found" />
      {basket?.length === 0?(
          <div className="">
              <h1>Yours Shopping Basket is empty</h1>
              <p>You have no item in you shopping basket, to buy one or more items, click "Add to basket" next to the item</p>
          </div>
      ):""}
    </div>
  );
};

export default Checkout;
