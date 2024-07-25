import { Html, useGLTF, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import "./style.css";

export default function MonitorOld({ occlude, websiteUrl, setLoading }) {
  const monitor = useGLTF("./public/assets/model/monitor-old.gltf");
  const pc = useGLTF("./public/assets/model/pc-old/pc-old.gltf");
  const keyboard = useGLTF(
    "./public/assets/model/keyboard-old/keyboard-old.gltf"
  );

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <>
      <primitive
        object={keyboard.scene}
        position={[0.1, -0.55, 1.3]}
        scale={[6, 6, 6]}
        rotation={[0, 0, 0]}
        castShadow
      ></primitive>
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
        rotation={[0, 4.76, 0]}
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
          <iframe src={websiteUrl} />
        </Html>
      </primitive>
    </>
  );
}
