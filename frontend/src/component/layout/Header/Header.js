import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = ({ clicked, isClicked }) => {
  const handleClicked = () => {
    isClicked(!clicked);
  };

  return (
    <section id="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <div>
        <ul id="navbar">
          <li>
            <NavLink to="/" className="a">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="a">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="a">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="a">
              About
            </NavLink>
          </li>
          <li id="lg-cart">
            <NavLink to="/cart" className="a">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
          <li id="lg-search">
            <NavLink to="/search" className="a">
              <i className="fa-solid fa-magnifying-glass"></i>
            </NavLink>
          </li>
          <li id="lg-account">
            <NavLink to="/login" className="a">
              <i className="fa-solid fa-image-portrait"></i>
            </NavLink>
          </li>
          <i id="close" className="fa-solid fa-xmark"></i>
        </ul>
        <div id="mobile">
          <NavLink to="/search" className="a">
            <i className="fa-solid fa-magnifying-glass"></i>
          </NavLink>
          <NavLink to="/login" className="a">
            <i className="fa-solid fa-image-portrait"></i>
          </NavLink>
          <NavLink to="/cart" className="a">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          {!clicked ? (
            <GiHamburgerMenu className="icon" onClick={handleClicked} />
          ) : (
            <ImCross className="icon" onClick={handleClicked} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
