import { Instances } from "@react-three/drei";
import { MathUtils } from "three";
import { Bubble } from "./bubble";

const particles = Array.from({ length: 90 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.60),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10),
}));

export const Bubbles = () => {
  return (
    <Instances
      limit={particles.length}
      castShadow
      receiveShadow
      position={[0, 2.5, 0]}
    >
      <sphereGeometry args={[0.45, 64, 64]} />
      <meshStandardMaterial roughness={1} color="#f0f0f0" />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  );
};
