
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
    Suspense
  } from "react";

  import { Canvas, useFrame, useLoader } from "@react-three/fiber";
  import styled from "styled-components";
  import { TextureLoader  } from "three";

  import EarthDayMap from "../img/earth-large.jpg"
  import EarthNormalMap from "../img/earth-large.jpg"
  import EarthSpecularMap from "../img/earth-large.jpg"
  import EarthCloudMap from "../img/earth-large.jpg"
  
  import * as THREE from "three";
  
  import "./styles.css";
  import { OrbitControls, Stars } from "@react-three/drei";

  export default function MyGlobe(props) {


    
    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(
      TextureLoader,
       [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap])
   
    const earthRef = useRef();
    
    const [pos, setPos]   = useState([0,0])
    const [step, setStep] = useState([0,0])
    const [target, setTarget] = useState([props.x, props.y])

    useEffect(()=>{

      // console.log("pos, target and earth", pos, target, earthRef.current.rotation.x, earthRef.current.rotation.y)
      calcStep(pos[0],pos[1], target[0], target[1])
      // console.log ("pppppp", earthRef.current)
    }, [])
   
    function calcStep (cx, cy, tx, ty){
      // console.log ("parameters pos, target",cx,cy, tx, ty)
      const stepx = (tx-cx)>0?(tx-cx)/100:-(tx-cx)/100;
      const stepy = (ty-cy)>0?(ty-cy)/100:-(ty-cy)/100;
      // console.log ("difference x y",stepx, stepy)

      setStep ([stepx, stepy]) 
    }
    

    
    useFrame(({clock})=>{

      // console.log("pos step target", pos, step, target)
      // console.log("earthREFFFFF", earthRef)

        const elapsedTime = clock.getElapsedTime();
        // console.log("earth Info 1 ", earthRef.current.rotation.x)

        earthRef.current.rotation.y=elapsedTime/6
       
    } )
    
       
    return (
      <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[1, 0, -5]} intensity={1.0} />
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />

      <mesh ref={earthRef} position={[0, 0, -3]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        { <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> }
      </mesh>
    </>

    )
  }
  