import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div>
      {/* price */}
      <CurrencyFormat
      renderText={(value)}=>{
          <>
          <p>
              Subtotal ({basket.length} items): <strong>(`${value}`)</strong>
          </p>
          <small className="ch"
      }
       />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
