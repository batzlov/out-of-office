import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";

export default function Office() {
    const { scene } = useGLTF("/models/apartment.glb");

    useEffect(() => {
        scene.scale.set(4, 4, 4);
        scene.position.set(0, 0.6, 0);
    }, [scene]);

    return (
        <RigidBody type="fixed" colliders="hull">
            <primitive object={scene} />
        </RigidBody>
    );
}
