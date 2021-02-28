import React from "react";
import "./CheckOut.css";
import Subtotal from "./SubTotal.js";

function Checkout() {
  return (
    
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt=""
          className="checkout_ad"
        />

        <div>
          <h2 className="checkout_title">shopping basket</h2>
        </div>
      </div>
      <div className="checkoutright">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
