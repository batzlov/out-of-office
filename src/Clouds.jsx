function Cloud({ position }) {
    const cloudParts = [];

    for (let i = 0; i < 5; i++) {
        cloudParts.push({
            radius: Math.random() * 1 + 1,
            position: [
                Math.random() * 3 - 1.5,
                Math.random() * 0.5,
                Math.random() * 3 - 1.5,
            ],
        });
    }

    return (
        <group position={position}>
            {cloudParts.map((part, index) => (
                <mesh key={index} position={part.position}>
                    <sphereGeometry args={[part.radius, 8, 8]} />
                    <meshStandardMaterial color={0xffffff} />
                </mesh>
            ))}
        </group>
    );
}

export default function Clouds() {
    const clouds = [];

    for (let i = 0; i < 8; i++) {
        clouds.push({
            position: [
                Math.random() * 60 - 30,
                15 + Math.random() * 10,
                Math.random() * 60 - 30,
            ],
        });
    }

    return (
        <>
            {clouds.map((cloud, index) => (
                <Cloud key={index} position={cloud.position} />
            ))}
        </>
    );
}
