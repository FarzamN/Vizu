import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "@/components/common/GLTFModel";

const UserModelPage = () => {
  const [searchParams] = useSearchParams();

  // Get value from QR URL
  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) {
      console.log("Invalid QR code");
      return;
    }

    console.log("QR Code value:", code);

    // NEXT STEP (later)
    // call API using this code
    // fetchUserByQr(code)

  }, [code]);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="border rounded-lg  text-center w-full h-full">
        <h1 className="text-2xl font-semibold mb-2">Welcome</h1>

        {code ? (
        <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <GltfModel url={"https://res.cloudinary.com/dyyfyyb8u/image/upload/v1766747116/make_me_a_fruit_bowl_yduqvp.glb"} />
        <OrbitControls />
      </Canvas>
      
        ) : (
          <p className="text-red-500">Invalid or missing QR code</p>
        )}
      </div>
    </div>
  );
};

export default UserModelPage;
