import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useGame } from "ecctrl";
import * as THREE from "three";

export default function Player() {
    const group = useRef();
    const { scene, animations } = useGLTF("/models/crypto-bro.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        console.log(
            "Available animations:",
            animations.map((a) => a.name)
        );
        console.log("Available actions:", Object.keys(actions));
    }, [animations, actions]);

    const curAnimation = useGame((state) => state.curAnimation);
    const initializeAnimationSet = useGame(
        (state) => state.initializeAnimationSet
    );

    useEffect(() => {
        const animationSet = {
            idle: "Armature|Idle",
            walk: "Armature|Walk",
            run: "Armature|Sprint",
            jump: "Armature|Jump",
            jumpIdle: "Armature|Idle",
            jumpLand: "Armature|Idle",
            fall: "Armature|Idle",
        };
        initializeAnimationSet(animationSet);
    }, [initializeAnimationSet]);

    useEffect(() => {
        const currentAction = actions[curAnimation];

        if (currentAction) {
            console.log("Playing animation:", curAnimation);

            Object.values(actions).forEach((action) => {
                action.stop();
            });

            if (
                curAnimation === "Armature|Jump" ||
                curAnimation === "Armature|Grounded"
            ) {
                currentAction
                    .reset()
                    .fadeIn(0.2)
                    .setLoop(THREE.LoopOnce)
                    .play();
                currentAction.clampWhenFinished = true;
            } else {
                currentAction
                    .reset()
                    .fadeIn(0.2)
                    .setLoop(THREE.LoopRepeat)
                    .play();
                currentAction.timeScale = 1;
            }
        }
    }, [curAnimation, actions]);

    return (
        <group ref={group} position={[0, -0.65, 0]}>
            <primitive object={scene} scale={0.7} />
        </group>
    );
}
