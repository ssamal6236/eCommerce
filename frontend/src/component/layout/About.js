import { Fragment } from "react";
import "./About.css";
import a1 from "../../images/about/a6.jpg";
import p1 from "../../images/profile/p1.jpg";
import p2 from "../../images/profile/p2.jpg";
import p3 from "../../images/profile/p3.jpg";
import v1 from "../../images/about/v1.mp4";
import MetaData from "./MetaData";
import Loader from "./Loader/Loader";

const About = () => {
  return (
    <Fragment>
      <MetaData title="About Us" />
      <section id="prod-header" className="about-header">
        <h2>#knowus</h2>
        <p>Let us help you in anyway we can!</p>
      </section>

      <section id="about-head" className="section-p1-a">
        <img src={a1} alt="a1" />
        <div>
          <h2>Who Are We?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Habitasse platea dictumst vestibulum rhoncus. Ante in nibh mauris
            cursus mattis molestie a. Gravida in fermentum et sollicitudin ac
            orci. Elementum sagittis vitae et leo.
          </p>

          <abbr title="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </abbr>

          <br />
          <br />

          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper
            a lacus vestibulum sed arcu non odio euismod.
          </marquee>
        </div>
      </section>

      <section id="contact-details" className="section-p1-a">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our store locations or contact us today!</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fa-solid fa-map-location-dot"></i>
              <p>108 University Ave, Waterloo, ON N2J 2W2</p>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <p>contact@vkssolutions.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>+1 437-989-2321</p>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 16.00pm</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.101937860397!2d-80.5206958846643!3d43.47934297912756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf31d0cec9491%3A0x8bf5f60c306d2207!2sConestoga%20College%20-%20Waterloo!5e0!3m2!1sen!2sca!4v1658356908187!5m2!1sen!2sca"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="" className="section-p1-a">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-Mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="normal">SUBMIT</button>
        </form>

        <div className="people">
          <div>
            <img src={p1} alt="p1" />
            <p>
              <span>Kunal Gambhir</span> CEO <br /> Phone: +1 6474050130
              <br /> Email: kunal@vkssolutions.com
            </p>
          </div>
          <div>
            <img src={p2} alt="p2" />
            <p>
              <span>Vikram Sharma</span> CFO <br /> Phone: +1 4379842838
              <br /> Email: vikram@vkssolutions.com
            </p>
          </div>
          <div>
            <img src={p3} alt="p3" />
            <p>
              <span>Sovan Samal</span> COO <br /> Phone: +1 4379892321
              <br /> Email: sovan@vkssolutions.com
            </p>
          </div>
        </div>
      </section>

      <section id="about-app" className="section-p1-a">
        <h1>
          Download Our <a href="/about">App</a>
        </h1>
        <div className="video">
          <video src={v1} autoplay muted loop></video>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
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

export default About;
