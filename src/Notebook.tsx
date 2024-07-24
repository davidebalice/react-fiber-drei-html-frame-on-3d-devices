import { Html, useGLTF, useProgress } from "@react-three/drei";

import "./style.css";
import { useEffect } from "react";

export default function Notebook({ occlude,websiteUrl,setLoading }) {
  const notebook = useGLTF("./public/assets/model/macbook.gltf");

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <>
      <primitive
        object={notebook.scene}
        position-y={-1}
        castShadow
        receiceShadow
      />
      <Html
        wrapperClass="notebook"
        position={[0, 0.55, -1.40]}
        transform
        rotation-x={-0.26}
        distanceFactor={1.12}
        {...(occlude === 0 && { occlude: "blending" })}
      >
        {<iframe src={websiteUrl} />}
      </Html>
    </>
  );
}
