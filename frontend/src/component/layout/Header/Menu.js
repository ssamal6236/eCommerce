import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div id="Navbars">
      <ul id="NavbarWrapers">
        <li className="NavbarElements">
          <NavLink to="/" className="a">
            Home
          </NavLink>
        </li>
        <li className="NavbarElements">
          <NavLink to="/products" className="a">
            Products
          </NavLink>
        </li>
        <li className="NavbarElements">
          <NavLink to="/blogs" className="a">
            Blogs
          </NavLink>
        </li>
        <li className="NavbarElements">
          <NavLink to="/about" className="a">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
