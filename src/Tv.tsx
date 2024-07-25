import { Html, useGLTF, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import "./style.css";

export default function Tv({ occlude, websiteUrl, setLoading }) {
  const tv = useGLTF("./public/assets/model/tv.gltf");
  const sofa = useGLTF("./public/assets/model/sofa/sofa.gltf");
  const tvstand = useGLTF("./public/assets/model/tvstand.gltf");

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <>
      <primitive
        object={tvstand.scene}
        scale={[0.2, 0.2, 0.2]}
        position={[-0.8, -4, -7]}
        rotation={[0, 1.65, 0]}
        castShadow
        receiceShadow
      />
      <primitive
        object={sofa.scene}
        scale={[1.3, 1.3, 1.3]}
        position={[0, -3.5, 1]}
        rotation={[0, 3.2, 0]}
        castShadow
        receiceShadow
      />
      <primitive
        object={tv.scene}
        scale={[7, 7, 7]}
        position={[-1,0.8,-8]}
        rotation={[0, 0.15, 0]}
        castShadow
        receiceShadow
      />
      <Html
        wrapperClass="tv"
        position={[-0.95, 0.94, -7.73]}
        transform
        scale={[1.3, 1.3, 1.3]}
        rotation={[0, 0.15, 0]}
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
