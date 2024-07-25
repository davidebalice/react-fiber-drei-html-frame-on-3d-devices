import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import Preloader from "./Preloader";
import Scene from "./Scene";
import "./style.css";

const initialPosition: [number, number, number] = [-15, 6, 20];
const finalPosition: [number, number, number] = [-3, 2.5, 4];

function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
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
        setDevice={setDevice}
        setCameraPosition={setCameraPosition}
        initialPosition={initialPosition}
        finalPosition={finalPosition}
        setCameraPositionIndex={setCameraPositionIndex}
      />
      {showModal && <Modal setShowModal={setShowModal} />}
      {loading && <Preloader />}

      {!showModal && (
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
      )}

      <Footer showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
