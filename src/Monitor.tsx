import { Html, useGLTF, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import "./style.css";

interface MonitorProps {
  occlude: number;
  websiteUrl: string;
  setLoading: (loading: boolean) => void;
}

export default function Monitor({
  occlude,
  websiteUrl,
  setLoading,
}: MonitorProps) {
  const monitor = useGLTF("./public/assets/model/monitor.gltf");
  const pc = useGLTF("./public/assets/model/pc.gltf");
  const keyboard = useGLTF("./public/assets/model/keyboard/keyboard.gltf");

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <>
      <primitive
        object={pc.scene}
        position={[2.95, -5.1, -0.5]}
        scale={[0.135, 0.135, 0.135]}
        rotation={[0, 0, 0]}
        castShadow
      ></primitive>
      <primitive
        object={keyboard.scene}
        position={[0, -0.45, 1]}
        scale={[0.155, 0.155, 0.155]}
        rotation={[0, 0, 0]}
        castShadow
      ></primitive>
      <primitive
        object={monitor.scene}
        position-y={-0.5}
        position-z={-1}
        scale={[0.013, 0.013, 0.013]}
        rotation={[0, 4.76, 0]}
        castShadow
      >
        <Html
          wrapperClass="monitor"
          position={[37, 151, 0]}
          scale={[29, 29, 29]}
          transform
          rotation-y={1.595}
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
