import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Box3, Vector3, Group } from "three";
import { useLayoutEffect, useRef } from "react";

type Props = {
  url: string;
};

export default function AutoScaleModel({ url }: Props) {
  const group = useRef<Group>(null!);
  const { camera } = useThree();
  const { scene } = useGLTF(url);

  useLayoutEffect(() => {
    if (!group.current) return;

    // 1️⃣ Get bounding box
    const box = new Box3().setFromObject(scene);
    const size = new Vector3();
    const center = new Vector3();

    box.getSize(size);
    box.getCenter(center);

    // 2️⃣ Center the model
    scene.position.sub(center);

    // 3️⃣ Scale to fit camera
    const maxDimension = Math.max(size.x, size.y, size.z);
    const cameraZ = camera.position.z;

    const scale = cameraZ / maxDimension;
    scene.scale.setScalar(scale * 0.8); // padding

    camera.near = maxDimension / 100;
    camera.far = maxDimension * 100;
    camera.updateProjectionMatrix();
  }, [scene, camera]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
