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
            <div className="selector-custom-container">
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={face} alt="face-icon" />
                <label for="face">Face</label>
                <input type="color" id="face" name="face" />
              </div>{" "}
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={face} alt="face-icon" />
                <label for="face">Face</label>
                <input type="color" id="face" name="face" />
              </div>{" "}
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={face} alt="face-icon" />
                <label for="face">Face</label>
                <input type="color" id="face" name="face" />
              </div>{" "}
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={face} alt="face-icon" />
                <label for="face">Face</label>
                <input type="color" id="face" name="face" />
              </div>{" "}
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={face} alt="face-icon" />
                <label for="face">Face</label>
                <input type="color" id="face" name="face" />
              </div>
            </div>
          </div>
          {/* <div className="selector-custom-wrap">
            <label for="face">Face</label>
            <input type="color" id="face" name="face" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Selector;
