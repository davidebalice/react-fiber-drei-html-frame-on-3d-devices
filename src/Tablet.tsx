import { Html, useGLTF } from "@react-three/drei";
import "./style.css";

export default function Tablet({ occlude }) {
  const tablet = useGLTF("./public/assets/model/tablet.gltf");
  //{...(occlude === 0 && { occlude: "blending" })}
  return (
    <>
      <primitive
        object={tablet.scene}
        position-y={0.8}
        castShadow
        receiceShadow
      />
      <Html
        wrapperClass="tablet"
        position={[-0.01, 0.81, 0.068]}
        transform
        scale={[0.52, 0.52, 0.52]}
        rotation-x={0.03}
        rotation-y={-0.027}
        rotation-z={-0.008}
        distanceFactor={1.15}
        occlude="blending"
      >
        {<iframe src="https://www.sitishop.it" />}
      </Html>
    </>
  );
}
