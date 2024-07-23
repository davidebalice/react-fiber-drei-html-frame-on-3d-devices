import { Html, PresentationControls, useGLTF } from "@react-three/drei";
import DbLogo from "./DbLogo";
import Desktop from "./Desktop";
import Mug from "./Mug";
import "./style.css";

export default function Monitor({ occlude }) {
  const monitor = useGLTF("./public/assets/model/monitor.gltf");

  return (
    <>
        <Mug />
        <DbLogo />
        <Desktop />
        <primitive
          object={monitor.scene}
          position-y={1.2}
          position-z={-0.2}
          scale={[0.013, 0.013, 0.013]}
          rotation={[0, 4.66, 0]}
          castShadow
        >
          <Html
            wrapperClass="old-monitor"
            position={[15, 0, 0]}
            scale={[27, 27, 27]}
            transform
            rotation-y={1.58}
            rotation-x={0}
            rotation-z={0}
            distanceFactor={2}
            {...(occlude === 0 && { occlude: "blending" })}
          >
            <iframe
              src="https://www.sitishop.it"
              style={{ width: "1030px", height: "940px", border: "none" }}
            />
          </Html>
        </primitive>
    </>
  );
}
