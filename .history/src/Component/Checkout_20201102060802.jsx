import React from "react";
import banner from "../Image/amaazon-ad.jpeg";
import { useStateValue } from "../StateProvider";
import './Checkout.scss'
const Checkout = () => {
  const [{ dispatch }] = useStateValue();
  return (
    <div className="checkout">
      <img src={banner} className="checkout_add" alt="not-found" />
    </div>
  );
};

export default Checkout;
