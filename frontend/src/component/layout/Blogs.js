import React, { Fragment, useEffect } from "react";
import "./Blogs.css";
import b1 from "../../images/blog/b1.jpg";
import b2 from "../../images/blog/b2.jpg";
import b3 from "../../images/blog/b3.jpg";
import MetaData from "./MetaData";

const Blogs = () => {
  return (
    <Fragment>
      <MetaData title="Blogs" />
      <section id="prod-header" className="blog-header">
        <h2>#dogcaretips</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
          <img src={b1} alt="b1" />
          </div>
          <div className="blog-details">
            <h4>Secure Your Dog on Your Next Trip</h4>
            <p>
              Whether you're driving to the grocery store or going on a summer
              road trip to the beach, dog safety in the car is a top priority.
              One of the best ways to keep your dog safe is by properly securing
              them in the car.
            </p>
            <a href="#">Continue Reading</a>
          </div>
          <h1>19/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={b2} alt="b2" />
          </div>
          <div className="blog-details">
            <h4>Transport Your New Puppy in the Car Safely</h4>
            <p>
              You’ve decided to expand your family and now it’s time to bring
              your new puppy home. It’s an exciting time, but there’s a lot to
              do to get ready for your new addition, including that first car
              ride home.
            </p>
            <a href="#">Continue Reading</a>
          </div>
          <h1>24/02</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
          <img src={b3} alt="b3" />
          </div>
          <div className="blog-details">
            <h4>Dog Car Accessories to Keep Your Pup Safe and Comfortable</h4>
            <p>
              With warm weather right around the corner, it’s time to get ready
              for summer road trips with the whole family, including your dog.
              Before you set off on your adventures, you’ll want to make sure
              your dog has everything they need to have a fun, safe, and
              comfortable drive.
            </p>
            <a href="#">Continue Reading</a>
          </div>
          <h1>11/03</h1>
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
  );
};

export default Blogs;
