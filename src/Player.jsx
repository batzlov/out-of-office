import { useGLTF } from "@react-three/drei";

export default function Player() {
    const { scene } = useGLTF("/models/crypto-bro.glb");

    return (
        <group position={[0, -0.65, 0]}>
            <primitive object={scene} scale={0.7} />
        </group>
    );
}
