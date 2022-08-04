import React from "react";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <section id="header">
      <a href="#header">
        <img src={logo} className="logo" alt="logo" />
      </a>

      <div>
        <ul id="navbar">
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li id="lg-cart">
            <a href="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li id="lg-search">
            <a href="/search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li id="lg-account">
            <a href="/login">
              <i className="fa-solid fa-image-portrait"></i>
            </a>
          </li>
          <a href="#1" id="close">
            <i className="fa-solid fa-xmark"></i>
          </a>
        </ul>
      </div>
      <div id="mobile">
        <a href="/search"><i className="fa-solid fa-magnifying-glass"></i></a>
        <a href="/login"><i className="fa-solid fa-image-portrait"></i></a>
        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
        <i id="bar" className="fa-solid fa-bars"></i>
      </div>
    </section>
  );
};

export default Header;
