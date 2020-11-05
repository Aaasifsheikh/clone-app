import React from "react";
import banner from "../Image/amaazon-ad.jpeg";
import { useStateValue } from "../StateProvider";
import './Checkout.scss'
const Checkout = () => {
  const [{ dispatch }] = useStateValue();
  return (
    <div className="checkout">
      <img src={banner} className="checkout_ad" alt="not-found" />
      {basket?.length === 0(
          <div className="">
              <h1>Yp</h1>
          </div>
      )}
    </div>
  );
};

export default Checkout;
