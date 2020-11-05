import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div>
      {/* price */}
      <CurrencyFormat
      renderText={(value)}=>{
          <React.Fragment>
          <p>
              Subtotal ({basket.length} items): <strong>(`${value}`)</strong>
          </p>
          <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
          </small>
          </React>
      }
       />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;