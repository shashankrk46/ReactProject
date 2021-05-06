import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        Remember<span>That</span>
      </h1>
      <div className="items">
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </div>
        <div className="pricing">
          <a href="#">Contact</a>
          <button className="btn-nav">Go preminum</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
