import * as THREE from "three";

export default function Sky() {
    return (
        <mesh>
            <sphereGeometry args={[80, 32, 32]} />
            <shaderMaterial
                uniforms={{
                    topColor: { value: new THREE.Color(0x0077ff) },
                    bottomColor: { value: new THREE.Color(0x87ceeb) },
                }}
                vertexShader={`
                    varying vec3 vWorldPosition;
                    void main() {
                        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                        vWorldPosition = worldPosition.xyz;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform vec3 topColor;
                    uniform vec3 bottomColor;
                    varying vec3 vWorldPosition;
                    void main() {
                        float h = normalize(vWorldPosition).y;
                        gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
                    }
                `}
                side={THREE.BackSide}
            />
        </mesh>
    );
}
