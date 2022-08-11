import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard.js";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity <= 1) {
      return;
    }
    const newQty = quantity - 1;
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const checkoutHandler = () => {
    if (!user){
      navigate("/login");
    }else{
      navigate("/shipping");
    }
  };

  return (
    <Fragment>
      <MetaData title="Cart" />
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <h2>Cart Empty</h2>
          <Link to="/products">Go To Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartheader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>

                    <input type="number" readOnly value={item.quantity} />

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`$${(
                    item.price * item.quantity
                  ).toFixed(2)}`}</p>
                </div>
              ))}

            <div className="cartGrossTotal">
              <div></div>
              <div className="cartGrossTotalBox">
                <div>
                  <p>Sub-Total</p>
                  <p>{`$${subtotal.toFixed(2)}`}</p>
                </div>
                <div>
                  <p>Approx. Gross <br/> (After 13% Tax)</p>
                  <p>{`$${(subtotal * 1.13).toFixed(2)}`}</p>
                </div>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Checkout</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
