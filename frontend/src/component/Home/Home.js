import React, { Fragment, useEffect } from "react";
import "./Home.css";
import f1 from "../../images/features/f1.png";
import f2 from "../../images/features/f2.png";
import f3 from "../../images/features/f3.png";
import f4 from "../../images/features/f4.png";
import f5 from "../../images/features/f5.png";
import f6 from "../../images/features/f6.png";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title="Jus Dogs" />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section id="hero">
            <h4>Trade-in-offer</h4>
            <h2>Super Value deals</h2>
            <h1>On all products</h1>
            <p>Save more with coupons &amp; up to 70% off!</p>
            <a href="#product1">
              <button>Shop Now</button>
            </a>
          </section>

          <section id="feature" className="section-p1-h">
            <div className="fe-box">
              <img src={f1} alt="FS" />
              <h6>Free Shipping</h6>
            </div>
            <div className="fe-box">
              <img src={f2} alt="OO" />
              <h6>Online Order</h6>
            </div>
            <div className="fe-box">
              <img src={f3} alt="SM" />
              <h6>Save Money</h6>
            </div>
            <div className="fe-box">
              <img src={f4} alt="P" />
              <h6>Promotion</h6>
            </div>
            <div className="fe-box">
              <img src={f5} alt="HS" />
              <h6>Happy Sell</h6>
            </div>
            <div className="fe-box">
              <img src={f6} alt="S" />
              <h6>24/7 Support</h6>
            </div>
          </section>

          <section id="product1" className="section-p1-h">
            <h2>Featured Products</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-container1">
              {products &&
                products.map((product) => (
                  <Product product={product} key={product} />
                ))}
            </div>
          </section>

          <section id="newsletter" className="section-p1-h section-m1">
            <div className="newstext">
              <h4>Sign Up for Newsletters</h4>
              <p>
                Get E-mail updates about our latest shop and{" "}
                <span>special offers</span>.
              </p>
            </div>
            <div className="newsform">
              <input type="text" placeholder="Your Email Address" />
              <button className="normal">Sign Up</button>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
