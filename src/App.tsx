import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Preloader from "./Preloader";
import Scene from "./Scene";
import "./style.css";
import { useProgress } from "@react-three/drei";

const initialPosition = [-15, 6, 20];
const finalPosition = [-3, 2.5, 4];

function App() {
  const { progress } = useProgress();
  const [device, setDevice] = useState("notebook");
  const [cameraPosition, setCameraPosition] = useState(initialPosition);
  const [cameraPositionIndex, setCameraPositionIndex] = useState(0);
  const websiteUrl = " https://www.sitishop.it";

  /*
 useEffect(() => {
    // Monitorare il completamento del caricamento
    if (nodes && materials) {
      setLoading(false);
    }
  }, [nodes, materials]);


  {loading && <Preloader />}

*/

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
      {progress < 100 && <Preloader />}
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
        />
      </Canvas>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
