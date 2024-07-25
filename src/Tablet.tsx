import { Html, useGLTF, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import "./style.css";

interface TabletProps {
  occlude: number;
  websiteUrl: string;
  setLoading: (loading: boolean) => void;
}

export default function Tablet({
  occlude,
  websiteUrl,
  setLoading,
}: TabletProps) {
  const tablet = useGLTF("./public/assets/model/tablet.gltf");

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <>
      <primitive
        object={tablet.scene}
        scale={[1.3, 1.3, 1.3]}
        position-y={0.8}
        castShadow
        receiceShadow
      />
      <Html
        wrapperClass="tablet"
        position={[-0.01, 0.81, 0.087]}
        transform
        scale={[0.67, 0.68, 0.67]}
        rotation-x={0.03}
        rotation-y={-0.027}
        rotation-z={-0.008}
        distanceFactor={1.15}
        {...(occlude === 0 && { occlude: "blending" })}
      >
        {<iframe src={websiteUrl} />}
      </Html>
    </>
  );
}
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
