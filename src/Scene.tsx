import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import MonitorOld from "./MonitorOld.js";
import Notebook from "./Notebook.js";

const CameraController = ({ targetPosition }) => {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.lerp(
      { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
      0.05
    );
    camera.updateProjectionMatrix();
  });
  return null;
};

export default function Scene({
  device,
  initialPosition,
  finalPosition,
  cameraPosition,
  setCameraPosition,
  cameraPositionIndex,
  setCameraPositionIndex,
}) {
  /*
  useEffect(() => {
    const handleClick = () => {
      setCameraPosition(finalPosition);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
*/

  useEffect(() => {
    const handleWheel = (event: { deltaY: number }) => {
      if (event.deltaY > 0) {
        setCameraPosition(finalPosition);
        setCameraPositionIndex(1);
      } else {
        setCameraPosition(initialPosition);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: { deltaY: number }) => {
      if (event.deltaY > 0) {
        setCameraPositionIndex(1);
      } else {
        setCameraPositionIndex(0);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <PresentationControls
        global
        polar={cameraPositionIndex === 1 ? [-0.5, 0] : [-1, 0.5]}
        azimuth={cameraPositionIndex === 1 ? [-0.5, 0] : [-1, 0.5]}
      >
        <Environment preset="warehouse" />
        <ambientLight intensity={0.1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <ContactShadows
          position={[0, -2, -0.16]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.8}
          opacity={0.1}
          blur={0.5}
          color="black"
        />
        <CameraController targetPosition={cameraPosition} />
        {device == "notebook" ? (
          <Notebook occlude={cameraPositionIndex} />
        ) : (
          <MonitorOld occlude={cameraPositionIndex} />
        )}
      </PresentationControls>
    </>
  );
}
