import React from "react";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";

const CanvasJsx = () => {
  const ref = useRef();

  return (
    <Canvas>
      <mesh ref={ref}>
        <boxGeometry attach="geometry" args={[2, 2, 2]} />
      </mesh>
    </Canvas>
  );
};

export default CanvasJsx;
