import { useGLTF } from "@react-three/drei";
import "./style.css";

export default function Desktop() {
  const desktop = useGLTF("./public/assets/model/desktop.gltf");

  return (
    <>
      <primitive
        object={desktop.scene}
        position-y={-6.27}
        scale={[1.4, 1.4, 1.4]}
        receiveShadow
      />
    </>
  );
}
