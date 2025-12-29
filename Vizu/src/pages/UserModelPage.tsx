import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AutoFitModel from "@/components/AutoFitModel";
import ARButton from "@/components/ARButton";

const UserModelPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const [gltfUrl, setGltfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;

    // ✅ You can later call backend here
    // fetchModelByQr(code)

    setGltfUrl(`https://marceltech.com/demo/glbs/${code}.glb`);
  }, [code]);

  if (!code) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Invalid or missing QR code
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col">
      {/* AR Button */}
      <div className="p-4 flex justify-center border-b">
        {gltfUrl && <ARButton glbUrl={gltfUrl} />}
      </div>

      {/* 3D Viewer */}
      <div className="flex-1">
        {gltfUrl && (
          <Canvas camera={{ fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} />

            <AutoFitModel glbUrl={gltfUrl} />

            <OrbitControls />
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default UserModelPage;
