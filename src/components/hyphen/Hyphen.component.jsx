import React, { useEffect } from "react";
import hyphenImg from "../../imgs/hyphenImg.png";
import './Hyphen.styles.css';

const Hyphen = () => {
  return (
    <div className="hyphen-container">
      <div className="hyphen-img-container">
      <img className="hyphen-img" src={hyphenImg} alt="hyphen-img" />
      </div>
    
    </div>
  );
};

export default Hyphen;
