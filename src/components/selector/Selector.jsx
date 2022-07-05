import React from "react";
import "./selector.css";
import face from "../../assets/icon-body.png";

const Selector = () => {
  return (
    <div className="selector">
      <h2>Customize:</h2>
      <div className="selector-container">
        <div className="selector-single-row">
          <div className="selector-object">
            <h3>face</h3>
            <img src={face} />
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
