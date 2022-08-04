import React from "react";
import playstore from "../../../images/pay/play.jpg";
import appstore from "../../../images/pay/app.jpg";
import cardpay from "../../../images/pay/pay.png";
import logo from "../../../images/logo.png";
import "./Footer.css"


const Footer = () => {
    return (
        <footer className="section-p1-f">
        <div className="col">
            <img className="logo" src={logo} alt="JusDogs Logo"/>
            <h3>Jus Dogs</h3>
            <h4>Contact</h4>
            <p><strong>Address:</strong> Mississauga, Ontario, CA</p>
            <p><strong>Phone:</strong> (+1)437-989-2321/437-984-2838/647-405-0130</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="#header">About Us</a>
            <a href="#header">Delivery Information</a>
            <a href="#header">Privacy Policy</a>
            <a href="#header">Terms &amp; Conditions</a>
            <a href="#header">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="#header">Sign In</a>
            <a href="#header">View Cart</a>
            <a href="#header">My Wishlist</a>
            <a href="#header">Track My Order</a>
            <a href="#header">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={appstore} alt="AppStore"/>
                <img src={playstore} alt="PlayStore"/>
            </div>
            <p>Secure Payment Gateways</p>
            <img src={cardpay} alt="CardPay"/>
        </div>

        <div className="copyright">
            <p>&copy; 2022, VKS Solutions - Capstone Project Jus Dogs</p>
        </div>
    </footer>
    );
};

export default Footer;