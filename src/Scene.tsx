import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import DbLogo from "./DbLogo";
import Desktop from "./Desktop";
import Monitor from "./Monitor.js";
import MonitorOld from "./MonitorOld.js";
import Mug from "./Mug";
import Notebook from "./Notebook.js";
import Smartphone from "./Smartphone.js";
import Tablet from "./Tablet.js";

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
  websiteUrl,
  loading,
  setLoading,
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

  const renderDevice = (websiteUrl) => {
    switch (device) {
      case "notebook":
        return (
          <Notebook
            occlude={cameraPositionIndex}
            websiteUrl={websiteUrl}
            setLoading={setLoading}
          />
        );
      case "monitor":
        return (
          <Monitor
            occlude={cameraPositionIndex}
            websiteUrl={websiteUrl}
            setLoading={setLoading}
          />
        );
      case "monitorOld":
        return (
          <MonitorOld
            occlude={cameraPositionIndex}
            websiteUrl={websiteUrl}
            setLoading={setLoading}
          />
        );
      case "tablet":
        return (
          <Tablet
            occlude={cameraPositionIndex}
            websiteUrl={websiteUrl}
            setLoading={setLoading}
          />
        );
      case "smartphone":
        return (
          <Smartphone
            occlude={cameraPositionIndex}
            websiteUrl={websiteUrl}
            setLoading={setLoading}
          />
        );
      default:
        return null;
    }
  };

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
        {device != "smartphone" && device != "tablet" && (
          <>
            <Mug />
            <DbLogo />
            <Desktop />
          </>
        )}

        {renderDevice(websiteUrl)}
      </PresentationControls>
    </>
  );
}
