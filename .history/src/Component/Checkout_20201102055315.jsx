import React from "react";
import banner from "../Image/banner.jpeg";
import { useStateValue } from "../StateProvider";
const Checkout = () => {
  const [{ dispatch }] = useStateValue();
  return (
    <div className="checkout">
      <img src={banner} className="checkout_add" alt="not-found" />
    </div>
  );
};

export default Checkout;
