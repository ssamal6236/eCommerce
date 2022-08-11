import React, { Fragment, useState } from "react";
import "./UserOpions.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    {
      icon: <ShoppingCartIcon style={{color:cartItems.length? "green" : "unset"}}/>,
      name: `Cart (${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon style={{color:"red"}} />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    console.log("DAshboard");
    navigate("/dashboard");
  }

  function orders() {
    navigate("/orders");
  }

  function account() {
    navigate("/account");
  }
  function cart() {
    navigate("/cart");
  }

  function logoutUser() {
    dispatch(logout());
    //Alert message
  }

  return (
    <Fragment>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth<=920}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
