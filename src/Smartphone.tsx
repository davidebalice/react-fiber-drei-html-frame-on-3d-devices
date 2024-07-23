import { Html, useGLTF } from "@react-three/drei";
import "./style.css";
import DbLogo from "./DbLogo";
import Desktop from "./Desktop";
import Mug from "./Mug";

export default function Smartphone({ occlude }) {
  const smartphone = useGLTF("./public/assets/model/smartphone.gltf");
//{...(occlude === 0 && { occlude: "blending" })}
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
        position={[0, 0.80, 0.05]}
        transform
        scale={[0.5,0.5,0.5]}
        rotation-x={0}
        distanceFactor={1.25}
        occlude="blending"
      >
        {<iframe src="https://www.sitishop.it" />}
      </Html>
    </>
  );
}
