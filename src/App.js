import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CharacterModel from "./CharacterModel";
import "./App.css";
import Model from "./Kick";
import FemaleModel from "./Female";
import OthersModel from "./Others";
function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas
        camera={{ fov: 45 }}
        performance={{ min: 0.1 }}
        style={{
          height: "80vh",
        }}
      >
        <spotLight intensity={0.3} position={[5, 20, 20]} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
      </Canvas>
      <Canvas
        camera={{ fov: 45 }}
        performance={{ min: 0.1 }}
        style={{
          height: "80vh",
        }}
      >
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={null}>
          <FemaleModel />
        </Suspense>
      </Canvas>
      <Canvas
        camera={{ fov: 45 }}
        performance={{ min: 0.1 }}
        style={{
          height: "80vh",
        }}
      >
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={null}>
          <OthersModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
