import "./App.css";
import "./index.css";
import React from "react";
import { useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home";
// import { OrbitControls, useGLTF } from "@react-three/drei";

function App() {
  // const ref = useRef();
  return (
    <div className="App">
      <Home />
      {/* <Navbar />
      <h1>Mint</h1>
      <Canvas>
        <mesh ref={ref}>
          <boxGeometry attach="geometry" args={[2, 2, 2]} />
        </mesh>
      </Canvas>
      <h1>Customize</h1> */}
    </div>
  );
}

export default App;
