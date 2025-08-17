import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Memoize the scale to prevent unnecessary recalculations
  const scale = useMemo(() => 2.5, []);

  return (
    <primitive 
      object={earth.scene} 
      scale={scale} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        depth: true
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor('#050816', 1);
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = 2;
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
