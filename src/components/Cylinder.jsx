import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls } from "@react-three/drei";
const Cylinder = () => {
  return (
    <div className="cylinder">
      
       <Canvas camera={{fov: 30 ,position: [0, 0, 5]}}>
      <ambientLight/>
     <Scene></Scene>
    </Canvas>
    </div>
   
  );
};

export default Cylinder;