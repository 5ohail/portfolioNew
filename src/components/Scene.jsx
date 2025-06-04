import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
const Scene = () => {
  const tex = useTexture("./cylinder.png");
  const cyl = useRef();
  const [aspect, setAspect] = useState(window.innerWidth/window.innerHeight);
  window.addEventListener("resize",()=>{
    setAspect(window.innerWidth/window.innerHeight)
  })
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta * 0.5; // slower rotation
  });
  const dimensions = aspect >= 1 ? 1.3 : aspect * 1.15
  return (
    <group>
      <mesh ref={cyl} rotation={[0.1, 0, 0.4]} position={[0, 0.1, 0]}>
        <cylinderGeometry args={[dimensions, dimensions, dimensions, 60, 60, true]} />
        <meshBasicMaterial
          map={tex}
          transparent
          side={THREE.DoubleSide}
          onDispose={(material) => material.dispose()}
        />
      </mesh>
    </group>
  );
};

export default Scene;
