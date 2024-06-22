import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Experience } from "./component/Experience";

function App() {
  return (
    
      <Canvas camera={{ position: [100, 2, 100], fov: 50 }} 
        style={{ height: "100vh", width: "100vw", backgroundColor:"skyblue" }}
      >
        <OrbitControls /> 

        <ambientLight intensity={3} />
        <pointLight position={[5, 5, 5]} />
       
        <Experience/>
      </Canvas>
    
  );
}

export default App;
