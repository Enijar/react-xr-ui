import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Example from "@/components/example";
import { Layer, LayerRef } from "react-xr-ui";
import ViewCode from "@/components/view-code";

function Scene() {
  const [score, setScore] = React.useState(0);

  const targetRef = React.useRef<LayerRef>(null);

  useFrame(() => {
    const target = targetRef.current;
    if (target === null) return;
    const speedX = 0.003;
    const speedY = 0.0025;
    const deltaX = Math.sin(Date.now() * speedX);
    const deltaY = Math.sin(Date.now() * speedY);
    target.group.position.x = THREE.MathUtils.mapLinear(deltaX, -1, 1, -0.575, 0.575);
    target.group.position.y = THREE.MathUtils.mapLinear(deltaY, -1, 1, -0.325, 0.325);
  });

  return (
    <>
      <Layer
        position-y={0.6}
        width={0.85}
        height={0.1}
        borderRadius={0.25}
        backgroundColor="#111111"
        textContent="Click the spot to increase your score!"
        textAlign="center"
        verticalAlign="middle"
        fontSize={0.5}
      />
      <Layer
        width={1.5}
        height={1}
        borderWidth={0.025}
        borderColor="#222222"
        borderRadius={0.05}
        backgroundColor="#444444"
        backgroundImage="./assets/images/forest.jpg"
        backgroundSize="cover"
        alignItems="start"
        justifyContent="start"
        backgroundPosition={[0.5, 0.5]}
      >
        <Layer
          position-x={0.02}
          position-y={-0.02}
          width={0.175}
          height={0.075}
          backgroundColor="#aaaaaa"
          color="#111111"
          textContent={`Score: ${score}`}
          textAlign="center"
          verticalAlign="middle"
          fontSize={0.35}
        />
        <Layer
          ref={targetRef}
          autoLayout={false}
          width={0.3}
          height={0.3}
          borderRadius={0.5}
          textContent="Click Me!"
          backgroundColor="#666666"
          textAlign="center"
          verticalAlign="middle"
          color="#ffffff"
          fontWeight="bold"
          fontSize={0.2}
          lineHeight={1.2}
          onDown={() => setScore((score) => score + 1)}
        />
      </Layer>
    </>
  );
}

export default function ComplexUi() {
  return (
    <>
      <Example>
        <Scene />
      </Example>
      <ViewCode pathname="complex-ui" />
    </>
  );
}
