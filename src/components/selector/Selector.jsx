import React from "react";
import "./selector.css";
import antenna from "../../assets/icon-ant.png";
import eyes from "../../assets/icon-eye.png";
import face from "../../assets/icon-face.png";
import body from "../../assets/icon-body.png";
import aura from "../../assets/icon-lightn.png";

const Selector = () => {
  return (
    <div className="selector">
      <h2>Customize:</h2>
      <div className="selector-container">
        <div className="selector-wrap">
          <div className="selector-object">
            <div className="selector-custom-container">
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={aura} alt="aura-icon" />
                <label for="aura" className="selector-label">
                  Aura
                </label>
                <input type="color" id="aura" name="aura" />
              </div>
              <div className="selector-custom-wrap">
                <img
                  className="selector-img-icon"
                  src={antenna}
                  alt="ant-icon"
                />
                <label for="ant" className="selector-label">
                  Antenna
                </label>
                <input type="color" id="ant" name="ant" />
              </div>
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={eyes} alt="eyes-icon" />
                <label for="eyes" className="selector-label">
                  Eyes
                </label>
                <input type="color" id="eyes" name="eyes" />
              </div>
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={face} alt="face-icon" />
                <label for="face" className="selector-label">
                  Face
                </label>
                <input type="color" id="face" name="face" />
              </div>
              <div className="selector-custom-wrap">
                <img className="selector-img-icon" src={body} alt="body-icon" />
                <label for="face" className="selector-label">
                  Body
                </label>
                <input type="color" id="body" name="body" />
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
