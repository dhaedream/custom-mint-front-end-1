import React from "react";
import CanvasJsx from "../../components/canvas/CanvasJsx";
import Navbar from "../../components/navbar/Navbar";
import "./mint.css";
// import { useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";

const Mint = () => {
  // const ref = useRef();

  return (
    <div>
      <Navbar />
      <h1>Mint</h1>
      <div className="mint-container">
        <div className="mint-canvas-card">
          <div className="mint-canvas-wrapper">
            <CanvasJsx />
          </div>
          <div className="mint-custom-wrap">
            <div className="mint-custom-single-row">
              <div className="mint-custom-object">
                <img />
              </div>
              <div>
                <input />
                <label />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Customize</h1>
    </div>
  );
};

export default Mint;
