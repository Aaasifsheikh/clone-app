import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div>
      {/* price */}
      <CurrencyFormat
      ren
       />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;