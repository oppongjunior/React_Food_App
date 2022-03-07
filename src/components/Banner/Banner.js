import React from "react";
import "./Banner.css";
import BannerImage from "../../assets/banner.jpg";

function Banner() {
  return (
    <div className="banner mb-3" style={{ backgroundImage:`linear-gradient(#0000004e,#00000042), url(${BannerImage})` }}>
      <h4 className="h1 text-uppercase title">Finch Foods</h4>
      <p>Get free Discount for every food that you buy</p>
      <p>upTo 40% Discount</p>
      <button className="btn btn-dark">Buy now</button>
    </div>
  );
}

export default Banner;
