export default function Lights() {
    return (
        <>
            <ambientLight color={0x87ceeb} intensity={1.0} />
            <directionalLight
                color={0xfff5e6}
                intensity={2.0}
                position={[30, 25, -30]}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-camera-near={0.5}
                shadow-camera-far={100}
                shadow-camera-left={-30}
                shadow-camera-right={30}
                shadow-camera-top={30}
                shadow-camera-bottom={-30}
            />
            <directionalLight
                color={0xadd8e6}
                intensity={0.8}
                position={[-10, 10, 10]}
            />
        </>
    );
}
