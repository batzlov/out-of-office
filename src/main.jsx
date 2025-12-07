import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Bvh } from "@react-three/drei";
import { Suspense } from "react";

import Experience from "./Experience.jsx";

import "./main.css";

createRoot(document.getElementById("root")).render(
    <Canvas
        camera={{
            fov: 65,
            near: 0.1,
            far: 1000,
        }}
        onPointerDown={(e) => {
            if (e.pointerType === "mouse") {
                e.target.requestPointerLock();
            }
        }}
    >
        <Suspense fallback={null}>
            <Bvh firstHitOnly>
                <Experience />
            </Bvh>
        </Suspense>
    </Canvas>,
);
