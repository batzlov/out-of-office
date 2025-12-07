import { RigidBody } from "@react-three/rapier";

export default function Ground() {
    return (
        <RigidBody type="fixed" friction={2}>
            <mesh rotation-x={-Math.PI / 2} position={[0, -0.5, 0]}>
                <boxGeometry args={[100, 100, 1]} />
                <meshStandardMaterial color={0x3a7d3a} roughness={0.8} />
            </mesh>
        </RigidBody>
    );
}
