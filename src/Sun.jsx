export default function Sun() {
    return (
        <mesh position={[30, 25, -30]}>
            <sphereGeometry args={[3, 32, 32]} />
            <meshBasicMaterial color={0xffff00} />
        </mesh>
    );
}
