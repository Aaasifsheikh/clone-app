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
              Subtotal ({basket.length} items): <strong>(`${</strong>
          </p>
      }
       />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
