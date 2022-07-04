import React from "react";
import CanvasJsx from "../../components/canvas/CanvasJsx";
import Navbar from "../../components/navbar/Navbar";
// import { useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";

const Home = () => {
  // const ref = useRef();

  return (
    <div>
      <Navbar />
      <h1>Mint</h1>
      <CanvasJsx />
      <h1>Customize</h1>
    </div>
  );
};

export default Home;
