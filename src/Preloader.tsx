import React from "react";
import { useProgress } from "@react-three/drei";
import "./style.css"; 

const Preloader = () => {
  const { progress } = useProgress(); 

  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Loading: {Math.round(progress)}%</p> 
    </div>
  );
};

export default Preloader;
