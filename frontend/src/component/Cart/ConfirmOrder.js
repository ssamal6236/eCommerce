import React, { Fragment } from "react";
import "./ConfirmOrder.css";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 50 ? 0 : 10;

  const tax = subtotal * 0.13;

  const totalPrice = subtotal + shippingCharges + tax;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmShippingArea">
            <h2 className="confirmShippingHeading">Shipping Info</h2>
            <div className="confirmShippingBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <h2 className="confirmCartHeading">Your Cart Items</h2>
            <div className="confirmCartContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    <span>
                      {item.quantity} x ${item.price} ={" "}
                      <b>${item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
          <div className="orderSummary">
            <h2 className="orderSummaryHeading">Order Summary</h2>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>${shippingCharges}</span>
              </div>
              <div>
                <p>Tax:</p>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="orderTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={proceedToPayment}>Procced to Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
