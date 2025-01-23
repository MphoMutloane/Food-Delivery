import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return <div className="footer" id="footer">
<div className="footer-content">
    <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ut dicta eos sunt vitae magnam consequuntur hic deserunt culpa optio nostrum error tenetur natus illo, quaerat esse ipsam recusandae. Minus?</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+27 82 456 7892</li>
            <li>contact@tomato.co.za</li>
        </ul>
    </div>
</div>
<hr />
<p className="footer-copyright">Copyright 2025 © Tomato.co.za - All Right Reserved.</p>
  </div>;
};

export default Footer;
