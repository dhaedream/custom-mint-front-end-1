import React from "react";
import "./selector.css";
import face from "../../assets/icon-body.png";

const Selector = () => {
  return (
    <div className="selector">
      <h2>Customize:</h2>
      <div className="selector-container">
        <div className="selector-wrap">
          <div className="selector-object">
            <div className="selector-object-row">
              <img className="selector-img-icon" src={face} alt="face-icon" />
              <img className="selector-img-icon" src={face} alt="face-icon" />
              <img className="selector-img-icon" src={face} alt="face-icon" />
              <img className="selector-img-icon" src={face} alt="face-icon" />
              <img className="selector-img-icon" src={face} alt="face-icon" />
            </div>
            <div className="selector-object-highlight-wrap">
              <h3>face</h3>
              <img className="selector-img-focus" src={face} alt="face-icon" />
            </div>
          </div>
          <div>
            <input />
            <label />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
