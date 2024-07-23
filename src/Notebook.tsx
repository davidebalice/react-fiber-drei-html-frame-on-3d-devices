import { Html, useGLTF } from "@react-three/drei";

import "./style.css";

export default function Notebook({ occlude }) {
  const notebook = useGLTF("./public/assets/model/macbook.gltf");

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
        {<iframe src="https://www.sitishop.it" />}
      </Html>
    </>
  );
}
