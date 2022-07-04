import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  const ref = useRef();

  return (
    <div>
      <Navbar />
      <h1>Mint</h1>
      <Canvas>
        <mesh ref={ref}>
          <boxGeometry attach="geometry" args={[2, 2, 2]} />
        </mesh>
      </Canvas>
      <h1>Customize</h1>
    </div>
  );
};

export default Home;
