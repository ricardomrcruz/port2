import { useRef } from "react";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { Group } from "three";

interface ModelProps {
  modelPath: string;
  scale?: number;
  autoRotate?: boolean;
}

function Model({ modelPath, scale = 1, autoRotate = true }: ModelProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (autoRotate && group.current) {
      group.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={scale} position={[-0.8, -0.5, 0]} />
    </group>
  );
}

export default function ModelViewer({
  modelPath,
  scale = 1,
  autoRotate = true,
}: any) {
  return (
    <div className="h-[50vh] w-[50%] m-auto relative bg-black pb-[-20px] cursor-grabbing">
      <Canvas>
        <color attach="background" args={["#000000"]} />

        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 2, 6]} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Model */}
        <Model modelPath={modelPath} scale={scale} autoRotate={autoRotate} />

        {/* Controls */}
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}

// Preload with correct path
useGLTF.preload("/8_bit_pc.glb");
