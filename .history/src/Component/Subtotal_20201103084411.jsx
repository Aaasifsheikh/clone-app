import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBaskettotal } from "../reducer";
import StripeCheckout from "react-stripe-checkout";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getBaskettotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to checkout</button>
      <div className="stripeCheckout">
      <StripeCheckout style= />

      </div>
    </div>
  );
};

export default Subtotal;
