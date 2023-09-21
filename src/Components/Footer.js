import React from "react";
import Socials from "../Assets/Images/Socials.png";
import "../Components/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={Socials} alt="" className="socials" />
      <div className="footer-nav">
        <span>Conditions of Use</span>
        <span className="privacy">Privacy / Policy</span>
        <span>Press Room</span>
      </div>
    </div>
  );
}

export default Footer;
