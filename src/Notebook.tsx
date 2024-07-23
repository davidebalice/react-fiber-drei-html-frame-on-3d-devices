import { Html, PresentationControls, useGLTF } from "@react-three/drei";
import DbLogo from "./DbLogo";
import Desktop from "./Desktop";
import Mug from "./Mug";
import "./style.css";

export default function Notebook({ occlude }) {
  const notebook = useGLTF("./public/assets/model/macbook.gltf");

  return (
    <>
    
        <Mug />
        <DbLogo />
        <Desktop />
        <primitive
          object={notebook.scene}
          position-y={-1}
          castShadow
          receiceShadow
        />
        <Html
          wrapperClass="monitor"
          position={[0, 0.55, -1.38]}
          transform
          rotation-x={-0.25}
          distanceFactor={1.12}
          {...(occlude === 0 && { occlude: "blending" })}
        >
          {<iframe src="https://www.sitishop.it" />}
        </Html>
    </>
  );
}
