import React from "react";
import CanvasJsx from "../../components/canvas/CanvasJsx";
import Navbar from "../../components/navbar/Navbar";
import Selector from "../selector/Selector";
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
          {/* <Selector /> */}
        </div>
        <Selector />
      </div>
      <h1>Customize</h1>
    </div>
  );
};

export default Mint;
