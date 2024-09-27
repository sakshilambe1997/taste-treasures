import React from "react";
import LogoImg from "./../../components/Navbar/logo.png"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div>
        <div>
            <img src={LogoImg} className="footer-logo-img"/>
            <p>c@2024 TasteTreasures Limited</p>
            <p>No .55 Sy No 12 Block-ground floor Embassy Tech village | outer ring road, Pune.</p>
        </div>
        <div>
            <h2>Company</h2>
          <Link to="">About Us</Link>
          <Link to="">About Us</Link>
          <Link to="">About Us</Link>
          <Link to="">About Us</Link>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Footer;
