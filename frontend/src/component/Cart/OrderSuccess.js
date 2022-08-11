import React from "react";
import "./OrderSuccess.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return <div className="orderSuccess">
    <CheckCircleIcon />
    <p>Your Order Has Been Placed Successfully</p>
    <Link to="/orders">View Orders</Link>
  </div>
};

export default OrderSuccess;
