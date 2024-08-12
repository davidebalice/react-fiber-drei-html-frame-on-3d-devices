import { Html, useGLTF, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import "./style.css";

interface MonitorOldProps {
  occlude: number;
  websiteUrl: string;
  setLoading: (loading: boolean) => void;
}

export default function MonitorOld({
  occlude,
  websiteUrl,
  setLoading,
}: MonitorOldProps) {
  const monitor = useGLTF("./public/assets/model/monitor-old.gltf");
  const pc = useGLTF("./public/assets/model/pc-old/pc-old.gltf");
  const table = useGLTF("./public/assets/model/table.gltf");
  const chair = useGLTF("./public/assets/model/chair.gltf");
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
        position={[0.5, -0.22, 2]}
        scale={[1.7, 1.7, 1.7]}
        rotation={[0, -1.59, 0]}
        castShadow
      ></primitive>

    <primitive
        object={table.scene}
        position={[0.5, -2.7, 0.2]}
        scale={[5, 5, 5]}
        rotation={[0, -1.59, 0]}
        castShadow
      ></primitive>

    <primitive
        object={chair.scene}
        position={[0.5, -2.25, 2]}
        scale={[3.1, 3.1, 3.1]}
        rotation={[0, 0, 0]}
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
