import { Html, useGLTF } from "@react-three/drei";
import "./style.css";

export default function MonitorOld({ occlude }) {
  const monitor = useGLTF("./public/assets/model/monitor-old.gltf");
  const pc = useGLTF("./public/assets/model/pc-old.gltf");

  return (
    <>
      <primitive
        object={pc.scene}
        position={[0.5, -4.95, 2]}
        scale={[1.7, 1.7, 1.7]}
        rotation={[0, -1.59, 0]}
        castShadow
      ></primitive>
      <primitive
        object={monitor.scene}
        position-y={1.2}
        position-z={-0.2}
        scale={[0.013, 0.013, 0.013]}
        rotation={[0, 4.66, 0]}
        castShadow
      >
        <Html
          wrapperClass="monitor-old"
          position={[15, 0, 0]}
          scale={[27, 27, 27]}
          transform
          rotation-y={1.58}
          rotation-x={0}
          rotation-z={0}
          distanceFactor={2}
          {...(occlude === 0 && { occlude: "blending" })}
        >
          <iframe src="https://www.sitishop.it" />
        </Html>
      </primitive>
    </>
  );
}
