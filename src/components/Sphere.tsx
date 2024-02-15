import { useState, useEffect, useRef } from "react";
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, PointLight } from "three";

extend({ OrbitControls });

const SphereComponent = () => (
  <mesh scale={[10, 6, 6]} position={[0, 8, 0]}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color="#f4f4f5" />
  </mesh>
);

const MovingLight = () => {
  const lightRef = useRef<PointLight>(null);
  const [targetPosition, setTargetPosition] = useState(new Vector3(-6, 0, 5));
  const { viewport } = useThree();

  useEffect(() => {
    const updateTargetPosition = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 12 - 6;
      const y = -(event.clientY / window.innerHeight) * 1;
      const mouseX = x;
      const mouseY = y;
      setTargetPosition(new Vector3(mouseX, mouseY, 5));
    };

    window.addEventListener("mousemove", updateTargetPosition);

    return () => {
      window.removeEventListener("mousemove", updateTargetPosition);
    };
  }, [viewport]);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.lerp(targetPosition, 0.1);
    }
  });

  return <pointLight ref={lightRef} args={[0xffffff, 1.5, 100]} position={[-6, 0, 5]} intensity={100} />;
};

const Sphere3D = () => (
  <div className="absolute top-0 left-0 h-full w-full blur-sm hidden md:block">
    <Canvas camera={{ position: [0, 3, 8], rotation: [-0.15, 0, 0] }}>
      <ambientLight intensity={3.5} />
      <pointLight position={[5, 4, 6]} intensity={70} color="#f4f4f5" />
      <MovingLight />
      <SphereComponent />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  </div>
);

export default Sphere3D;
