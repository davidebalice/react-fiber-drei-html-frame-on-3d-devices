import { Html, useGLTF, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import "./style.css";

interface SmartphoneProps {
  occlude: number;
  websiteUrl: string;
  setLoading: (loading: boolean) => void;
}

export default function Smartphone({
  occlude,
  websiteUrl,
  setLoading,
}: SmartphoneProps) {
  const smartphone = useGLTF("./public/assets/model/smartphone.gltf");

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <>
      <primitive
        object={smartphone.scene}
        position-y={0.8}
        castShadow
        receiceShadow
      />
      <Html
        wrapperClass="smartphone"
        position={[0, 0.8, 0.055]}
        transform
        scale={[0.5, 0.5, 0.5]}
        rotation-x={0}
        distanceFactor={1.25}
        {...(occlude === 0 && { occlude: "blending" })}
      >
        {<iframe src={websiteUrl} />}
      </Html>
    </>
  );
}
