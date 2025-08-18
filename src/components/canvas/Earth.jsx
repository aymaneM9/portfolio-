import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Stars } from "@react-three/drei";

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
            frameloop="always" // 👈 keep it animating for stars + rotation
            dpr={[1, 2]}
            gl={{
                preserveDrawingBuffer: true,
                powerPreference: "high-performance",
                antialias: true,
                alpha: true,  // 👈 allow transparent blending with stars
            }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* Orbit controls */}
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                {/* Stars background */}
                <Stars
                    radius={300}     // size of the sphere where stars are drawn
                    depth={60}       // star distribution depth
                    count={20000}    // number of stars
                    factor={7}       // star size factor
                    saturation={0}   // keep them white
                    fade
                    speed={1}        // twinkle/rotation speed
                />

                {/* Earth model */}
                <Earth />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
