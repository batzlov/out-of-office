import { Physics } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl from "ecctrl";
import Lights from "./Lights.jsx";
import Sky from "./Sky.jsx";
import Sun from "./Sun.jsx";
import Clouds from "./Clouds.jsx";
import Ground from "./Ground.jsx";
import Player from "./Player.jsx";
import { RigidBody } from "@react-three/rapier";

const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
];

export default function Experience() {
    return (
        <>
            <Sky />
            <Sun />
            <Clouds />
            <Lights />
            <Physics gravity={[0, -9.81, 0]} timeStep="vary" debug>
                <KeyboardControls map={keyboardMap}>
                    <Ecctrl
                        debug
                        animated
                        capsuleHalfHeight={0.35}
                        capsuleRadius={0.3}
                        floatHeight={0.0}
                        camInitDis={-5}
                        camMaxDis={-7}
                        camMinDis={-3}
                        maxVelLimit={5}
                        sprintMult={2}
                    >
                        <Player />
                    </Ecctrl>
                </KeyboardControls>

                <RigidBody type="fixed">
                    <mesh position={[3, 0.5, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                </RigidBody>

                <RigidBody type="fixed">
                    <mesh position={[-3, 0.5, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="blue" />
                    </mesh>
                </RigidBody>

                <RigidBody type="fixed">
                    <mesh position={[0, 0.5, 3]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="green" />
                    </mesh>
                </RigidBody>

                <RigidBody type="fixed">
                    <mesh position={[0, 0.5, -3]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="yellow" />
                    </mesh>
                </RigidBody>

                <Ground />
            </Physics>
        </>
    );
}
