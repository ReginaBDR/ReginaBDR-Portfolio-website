import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { Bubbles } from "./bubbles";

export const Scene = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: false }}
      camera={{ fov: 50, position: [0, 0, 20] }}
      style={{ position: "absolute", zIndex: "-9999" }}
    >
      <color attach="background" args={["#ffffff"]} />
      <fog attach="fog" args={["red", 20, -5]} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <Bubbles />
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={6} intensity={2} color="red" />
        <TiltShift2 blur={0.1} />
      </EffectComposer>
      <Environment preset="city" />
    </Canvas>
  );
};
