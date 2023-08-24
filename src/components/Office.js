 import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const FLOOR_HEIGHT=2.3
export const NB_FLOORES=3


export function Office(props) {
  const { nodes, materials } = useGLTF("./models/office.glb");
  let ref=useRef()
  let tl=useRef()
  let libraryRef=useRef()
  let atticRef=useRef()
  const scroll =useScroll()

  useFrame(()=>{
    tl.current.seek(scroll)
  })
  
  
useLayoutEffect(()=>{
  tl.current = gsap.timeline() 

  tl.current.to(
    ref.current.position,{
      duration:2,
      y: -FLOOR_HEIGHT*(NB_FLOORES-1),
    },
    0
  )

tl.current.from(
  libraryRef.current.position,{
    duration:0.5,
    x:-2
  },
  0.5
)

tl.current.from(
  atticRef.current.position,{
    duration:1.5,
    x:2
  },
  0
)

} ,[])

  return (
    <group {...props} dispose={null}  ref={ref}>
      <group ref={libraryRef}
        position={[-3.025, 0.54, 0.562]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.018, 0.022, 0.019]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group ref={atticRef}
            position={[40.574, 19.542, 8.922]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-36.625, -67.542, -31.299]}
              scale={[1.414, 1, 1.702]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353001.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 0.892, -26.24]}
              scale={[0.074, 2.084, 0.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353004.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 36.798, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353002.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 0.892, -14.175]}
              scale={[0.074, 1.859, 0.727]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353003.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 0.892, 12.469]}
              scale={[0.074, 2.084, 0.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353005.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 30.411, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353006.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -35.496, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353007.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -29.109, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353008.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -35.496, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353009.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -29.109, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353010.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 30.169, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353011.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 36.556, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353012.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 43.392, 3.392]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353013.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 43.392, -11.557]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353014.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -41.96, -11.557]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353015.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -41.96, 3.392]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353017.geometry}
              material={materials["Material.002"]}
              position={[-21.89, 0, 29.697]}
              scale={[1.414, 1.378, 0.174]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353023.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[30.497, 72.436, -31.299]}
              scale={[1.933, 0.823, 1.189]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353024.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[49.384, 50.312, -25.213]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353025.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[49.384, 50.312, -10.65]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353026.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[11.136, 50.312, -10.65]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353027.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[11.136, 50.312, -25.213]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353028.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-36.625, 68.886, -31.299]}
              scale={[1.414, 1, 1.702]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353016.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-53.04, -68.976, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353018.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-53.04, 71.314, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353019.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-29.405, 80.502, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353020.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-29.405, -81.085, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353021.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-29.405, -53.294, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353022.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-29.405, 54.493, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
          </group>
          <group
            position={[69.022, 39.481, 21.318]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.565}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[-0.223, -0.54, -8.012]}
              scale={[0.284, 0.322, 0.284]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538003.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[14.432, -0.528, -6.251]}
              rotation={[0, 0.105, 0]}
              scale={[0.06, 0.367, 4.143]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538002.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[-1.664, 15.271, 5.316]}
              scale={0.444}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538001.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[-1.664, -17.269, 5.316]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={-0.444}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538004.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[20.742, 0.194, 5.401]}
              rotation={[0, -1.192, 0]}
              scale={[0.405, 0.405, 0.17]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354.geometry}
            material={materials.MaterialFBXASC032FBXASC0354}
            position={[-22.588, 88.167, 28.596]}
            rotation={[-Math.PI / 2, -0.256, -Math.PI / 2]}
            scale={[0.261, 0.458, 0.458]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1002.geometry}
            material={materials.MaterialFBXASC032FBXASC0354_ncl1_1}
            position={[6.864, 51.118, -34.455]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.514, 1.18, 0.514]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0352.geometry}
            material={materials.MaterialFBXASC032FBXASC0352}
            position={[76.12, 26.409, -66.145]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.514, 0.514, 0.363]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1001.geometry}
            material={materials.MaterialFBXASC032FBXASC0354_ncl1_1}
            position={[14.69, 51.403, 11.988]}
            rotation={[-Math.PI / 2, 0.147, -Math.PI]}
            scale={[0.53, 0.715, 0.715]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1.geometry}
            material={materials.MaterialFBXASC032FBXASC0354_ncl1_1}
            position={[16.037, 50.997, -18.414]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.203, 0.243, 0.136]}
          />
        </group>
      </group>
      <group
        position={[-3.032, 0.442, 5.15]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.016, 0.021, 0.017]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[40.574, 19.542, 8.922]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group
              position={[-60.47, 36.798, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353033.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.001"]}
                position={[0, 0, 0]}
              />
            </group>
            <group
              position={[-60.47, 30.411, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353034.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.001"]}
                position={[0, 0, 0]}
              />
            </group>
            <group
              position={[-60.47, -35.496, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353035.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.001"]}
                position={[0, 0, 0]}
              />
            </group>
            <group
              position={[-60.47, -35.496, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353037.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.001"]}
                position={[0, 0, 0]}
              />
            </group>
            <group
              position={[-60.47, 30.169, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353039.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.001"]}
                position={[0, 0, 0]}
              />
            </group>
            <group
              position={[-60.47, 36.556, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353040.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.001"]}
                position={[0, 0, 0]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353029.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-36.625, -67.542, -31.299]}
              scale={[1.414, 1, 1.702]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353030.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, 0.892, -26.24]}
              scale={[0.074, 2.084, 0.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353031.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, 0.892, -14.175]}
              scale={[0.074, 1.859, 0.727]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353032.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, 0.892, 12.469]}
              scale={[0.074, 2.084, 0.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353036.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, -29.109, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353038.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, -29.109, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353041.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, 43.392, 3.392]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353042.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, 43.392, -11.557]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353043.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, -41.96, -11.557]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353044.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-60.47, -41.96, 3.392]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353046.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-21.89, 0, 29.697]}
              scale={[1.414, 1.378, 0.174]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353052.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[30.497, 72.436, -31.299]}
              scale={[1.933, 0.823, 1.189]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353053.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[49.384, 50.312, -25.213]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353054.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[49.384, 50.312, -10.65]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353055.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[11.136, 50.312, -10.65]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353056.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[11.136, 50.312, -25.213]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353057.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-36.625, 68.886, -31.299]}
              scale={[1.414, 1, 1.702]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353045.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-53.04, -68.976, 14.921]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353047.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-53.04, 71.314, 14.921]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353048.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-29.405, 80.502, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353049.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-29.405, -81.085, 14.921]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353050.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-29.405, -53.294, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353051.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.001"]}
              position={[-29.405, 54.493, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
          </group>
          <group
            position={[69.022, 39.481, 21.318]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.565}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538005.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.001"]}
              position={[-0.223, -0.54, -8.012]}
              scale={[0.284, 0.322, 0.284]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538008.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.001"]}
              position={[14.432, -0.528, -6.251]}
              rotation={[0, 0.105, 0]}
              scale={[0.06, 0.368, 4.143]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538007.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.001"]}
              position={[-1.664, 15.271, 5.316]}
              scale={0.444}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538006.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.001"]}
              position={[-1.664, -17.269, 5.316]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={-0.444}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538009.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.001"]}
              position={[20.742, 0.194, 5.401]}
              rotation={[0, -1.192, 0]}
              scale={[0.405, 0.405, 0.17]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354001.geometry}
            material={materials["MaterialFBXASC032FBXASC0354.001"]}
            position={[-22.588, 88.167, 28.596]}
            rotation={[-Math.PI / 2, -0.256, -Math.PI / 2]}
            scale={[0.261, 0.458, 0.458]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1005.geometry}
            material={materials["MaterialFBXASC032FBXASC0354_ncl1_1.001"]}
            position={[6.864, 51.118, -34.455]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.514, 1.18, 0.514]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0352001.geometry}
            material={materials["MaterialFBXASC032FBXASC0352.001"]}
            position={[76.12, 26.409, -66.145]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.514, 0.514, 0.363]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1004.geometry}
            material={materials["MaterialFBXASC032FBXASC0354_ncl1_1.001"]}
            position={[14.69, 51.403, 11.988]}
            rotation={[-Math.PI / 2, 0.147, -Math.PI]}
            scale={[0.53, 0.715, 0.715]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1003.geometry}
            material={materials["MaterialFBXASC032FBXASC0354_ncl1_1.001"]}
            position={[16.037, 50.997, -18.414]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.203, 0.243, 0.136]}
          />
        </group>
      </group>
      <group
        position={[0.166, 0.47, -3.115]}
        rotation={[-1.575, -0.028, -1.53]}
        scale={[0.018, 0.022, 0.02]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[40.574, 19.542, 8.922]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group
              position={[-60.47, -35.496, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353066.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.002"]}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              position={[-60.47, -29.109, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353067.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.002"]}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              position={[-60.47, 36.556, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353069.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.002"]}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              position={[-60.47, -41.96, 3.392]}
              scale={[0.044, 0.217, 0.076]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MaterialFBXASC032FBXASC0353073.geometry}
                material={materials["MaterialFBXASC032FBXASC0353.002"]}
                position={[-0.001, 0, 0]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353058.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-36.625, -67.542, -31.299]}
              scale={[1.414, 1, 1.702]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353059.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, 0.892, -26.24]}
              scale={[0.074, 2.084, 0.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353062.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, 36.798, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353060.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, 0.892, -14.175]}
              scale={[0.074, 1.859, 0.727]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353061.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, 0.892, 12.469]}
              scale={[0.074, 2.084, 0.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353063.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, 30.411, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353064.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, -35.496, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353065.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, -29.109, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353068.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, 30.169, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353070.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, 43.392, 3.392]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353071.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, 43.392, -11.557]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353072.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-60.47, -41.96, -11.557]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353075.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-21.89, 0, 29.697]}
              scale={[1.414, 1.378, 0.174]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353081.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[30.497, 72.436, -31.299]}
              scale={[1.933, 0.823, 1.189]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353082.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[49.384, 50.312, -25.213]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353083.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[49.384, 50.312, -10.65]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353084.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[11.136, 50.312, -10.65]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353085.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[11.136, 50.312, -25.213]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353086.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-36.625, 68.886, -31.299]}
              scale={[1.414, 1, 1.702]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353074.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-53.04, -68.976, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353076.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-53.04, 71.314, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353077.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-29.405, 80.502, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353078.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-29.405, -81.085, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353079.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-29.405, -53.294, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0353080.geometry}
              material={materials["MaterialFBXASC032FBXASC0353.002"]}
              position={[-29.405, 54.493, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
          </group>
          <group
            position={[69.022, 39.481, 21.318]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.565}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538010.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.002"]}
              position={[-0.223, -0.54, -8.012]}
              scale={[0.284, 0.322, 0.284]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538013.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.002"]}
              position={[14.432, -0.528, -6.251]}
              rotation={[0, 0.105, 0]}
              scale={[0.06, 0.368, 4.143]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538012.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.002"]}
              position={[-1.664, 15.271, 5.316]}
              scale={0.444}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538011.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.002"]}
              position={[-1.664, -17.269, 5.316]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={-0.444}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03538014.geometry}
              material={materials["MaterialFBXASC032FBXASC03538.002"]}
              position={[20.742, 0.194, 5.401]}
              rotation={[0, -1.192, 0]}
              scale={[0.405, 0.405, 0.17]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354002.geometry}
            material={materials["MaterialFBXASC032FBXASC0354.002"]}
            position={[-22.588, 88.167, 28.596]}
            rotation={[-Math.PI / 2, -0.256, -Math.PI / 2]}
            scale={[0.261, 0.458, 0.458]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1008.geometry}
            material={materials["MaterialFBXASC032FBXASC0354_ncl1_1.002"]}
            position={[6.864, 51.118, -34.455]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.514, 1.18, 0.514]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0352002.geometry}
            material={materials["MaterialFBXASC032FBXASC0352.002"]}
            position={[76.12, 26.409, -66.145]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.514, 0.514, 0.363]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1007.geometry}
            material={materials["MaterialFBXASC032FBXASC0354_ncl1_1.002"]}
            position={[14.69, 51.403, 11.988]}
            rotation={[-Math.PI / 2, 0.147, -Math.PI]}
            scale={[0.53, 0.715, 0.715]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1006.geometry}
            material={materials["MaterialFBXASC032FBXASC0354_ncl1_1.002"]}
            position={[16.037, 50.997, -18.414]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.203, 0.243, 0.136]}
          />
        </group>
      </group>
      <group
        position={[-2.929, 0.2, -3.117]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.466}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Green_Plant}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials["Material.007"]}
          />
        </group>
      </group>
      <group
        position={[3.201, 0.263, -3.103]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.475}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4001.geometry}
            material={materials["material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5001.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6001.geometry}
            material={materials["Green_Plant.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7001.geometry}
            material={materials["Material.009"]}
          />
        </group>
      </group>
      <group
        position={[-1.298, 4.253, -3.673]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={6.345}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Frame1_0.geometry}
              material={materials.Frame1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Paper_Paper1_0.geometry}
              material={materials.Paper1}
              position={[10.049, 0.087, 6.25]}
              rotation={[0, 1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plexiglass_Plexiglass1_0.geometry}
              material={materials.Plexiglass1}
              position={[-6.611, 7.515, 1.174]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wood_Wood1_0.geometry}
              material={materials.Wood1}
              position={[0.391, 0.031, 0.227]}
            />
          </group>
        </group>
      </group>
      <group
        position={[0.439, 2.853, -3.698]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.5}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Frame1_0001.geometry}
              material={materials["Frame1.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Paper_Paper1_0001.geometry}
              material={materials["Paper1.001"]}
              position={[10.049, 0.087, 6.25]}
              rotation={[0, 1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plexiglass_Plexiglass1_0001.geometry}
              material={materials["Plexiglass1.001"]}
              position={[-6.611, 7.515, 1.174]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wood_Wood1_0001.geometry}
              material={materials["Wood1.001"]}
              position={[0.391, 0.031, 0.227]}
            />
          </group>
        </group>
      </group>
      <group
        position={[0, 2.676, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.023}
      >
        <group scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 0, 1.247]}
          />
        </group>
      </group>
      <group
        position={[0, 2.672, 3.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.026}
      >
        <group scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder__0001.geometry}
            material={materials["Scene_-_Root.001"]}
            position={[0, 0, 1.118]}
          />
        </group>
      </group>
      <group
        position={[-3.392, 2.668, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.021}
      >
        <group scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder__0002.geometry}
            material={materials["Scene_-_Root.002"]}
            position={[0.309, 0, 1.402]}
          />
        </group>
      </group>
      <group
        position={[-2.946, 2.65, 2.749]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.029}
      >
        <group scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder__0003.geometry}
            material={materials["Scene_-_Root.003"]}
            position={[0, 0, 1.016]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.003"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.003"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Material}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.001"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Frame1.001"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Frame1.001"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Frame1.001"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Frame1.001"]}
        position={[0, 2.878, 2.164]}
        scale={[3.646, 2.916, 5.979]}
      />
    </group>
  );
}

useGLTF.preload("./models/office.glb");


 
