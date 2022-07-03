import "./App.css";
import "./index.css";
import React from "react";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

function App() {
  const ref = useRef();
  return (
    <div className="App">
      <h1>Test</h1>
      <Canvas>
        <mesh ref={ref}>
          <boxGeometry attach="geometry" args={[2, 2, 2]} />
        </mesh>
      </Canvas>
      <h2>1 2 3!</h2>
    </div>
  );
}

export default App;
