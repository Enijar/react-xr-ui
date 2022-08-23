import React from "react";
import { BoxLineGeometry } from "three/examples/jsm/geometries/BoxLineGeometry";
import { useFrame } from "@react-three/fiber";
import {
  DefaultXRControllers,
  useXR,
  VRCanvas as Canvas,
} from "@react-three/xr";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { update } from "../../lib";

type Props = {
  children?: React.ReactNode;
};

function Scene({ children }: Props) {
  const { controllers } = useXR();

  useFrame((state) => {
    update(state, controllers);
  });

  return <>{children}</>;
}

export default function Example({ children }: Props) {
  const room = React.useMemo(() => {
    return new BoxLineGeometry(6, 6, 6, 10, 10, 10).translate(0, 3, 0);
  }, []);

  return (
    <Canvas legacy flat linear gl={{ alpha: false }}>
      {/** Background, cameras, controls and lights */}
      <color args={["#333333"]} attach="background" />
      <lineSegments geometry={room}>
        <lineBasicMaterial color="#c0c0c0" />
      </lineSegments>
      <PerspectiveCamera makeDefault position={[0, 1.6, 0]} />
      <OrbitControls makeDefault target={[0, 1, -1.8]} />
      <ambientLight />
      <DefaultXRControllers />

      <Scene>
        <group position={[0, 1, -1.88]}>{children}</group>
      </Scene>
    </Canvas>
  );
}
