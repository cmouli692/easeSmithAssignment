import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar-container">
        <p>{}</p>
      <p className="top-bar-text">Free Shipping on orders above 999/-</p>

      <p className="top-bar-text">Call us on: +91 9876805120</p>
    </div>
  );
};

export default TopBar;
