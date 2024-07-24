import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Preloader from "./Preloader";
import Scene from "./Scene";
import "./style.css";

const initialPosition = [-15, 6, 20];
const finalPosition = [-3, 2.5, 4];

function App() {
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState("notebook");
  const [cameraPosition, setCameraPosition] = useState(initialPosition);
  const [cameraPositionIndex, setCameraPositionIndex] = useState(0);
  const websiteUrl = "https://www.davidebalice.dev";

  useEffect(() => {
    setLoading(true);
  }, [device]);

  return (
    <>
      <Header
        device={device}
        setDevice={setDevice}
        setCameraPosition={setCameraPosition}
        initialPosition={initialPosition}
        finalPosition={finalPosition}
        setCameraPositionIndex={setCameraPositionIndex}
      />
      {loading && <Preloader />}
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.8, 4],
        }}
      >
        <Scene
          initialPosition={initialPosition}
          finalPosition={finalPosition}
          device={device}
          cameraPosition={cameraPosition}
          setCameraPosition={setCameraPosition}
          cameraPositionIndex={cameraPositionIndex}
          setCameraPositionIndex={setCameraPositionIndex}
          websiteUrl={websiteUrl}
          loading={loading}
          setLoading={setLoading}
        />
      </Canvas>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
