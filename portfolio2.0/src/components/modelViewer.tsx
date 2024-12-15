import { useRef } from "react";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { Group } from "three";
import * as THREE from "three";
import { useEffect } from "react";

interface ModelProps {
  modelPath: string;
  scale?: number;
  autoRotate?: boolean;
}

function Model({ modelPath, scale = 1, autoRotate = true }: ModelProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  // Center the model's pivot point
  useEffect(() => {
    if (scene) {
      // Calculate the center of the model
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());

      // Move the model geometry to center
      scene.position.sub(center);
    }
  }, [scene]);

  // Add a reference for tracking time
  const time = useRef(0);

  useFrame(() => {
    if (autoRotate && group.current) {
      group.current.rotation.y += 0.01;
      group.current.rotation.x += 0.002;

      // Update time
      time.current += 0.001;

      // Calculate scale using sine wave
      // This will make the scale oscillate between scale * 0.8 and scale * 1.2
      const scaleOffset = Math.sin(time.current) * 0.2;
      const newScale = scale * (1.4 + scaleOffset);

      // Apply new scale
      group.current.scale.set(newScale, newScale, newScale);
    }
  });

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={scale}
        position={[-1.1, -0.75, 0]}
        rotation={[0, 3.8, 0]}
      />
    </group>
  );
}

export default function ModelViewer({
  modelPath,
  scale = 1,
  autoRotate = true,
}: any) {
  return (
    <div className="h-[50vh] w-[95%] sm:w-[90%] md:w-[75%] lg:w-[43%] mx-auto relative bg-black pb-[-20px] cursor-grabbing">
      <Canvas>
        <color attach="background" args={["#000000"]} />
        // Allow frame rate to drop for better performance Limit pixel ratio for
        better performance
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
useGLTF.preload("/relativity_by_mc_escher.glb");
