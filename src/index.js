import { Canvas } from '@react-three/fiber'
import { Environment, Gltf, Loader, OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'

export default function ModelViewer({ gltf, scale, rotation, height, width, }) {

  return (
    <>
      <Canvas
        style={{ width: width || '300px', height: height || '300px' }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 10]
        }}
      >
        <Suspense fallback={null}>
          <Environment preset='city' />
          <OrbitControls />
          <Gltf
            src={gltf}
            scale={scale || 1}
            rotation={rotation || [0, 0, 0]}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}