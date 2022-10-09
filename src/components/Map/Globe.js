
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
    Suspense
  } from "react";

  import { useSpring, a } from "@react-spring/three";

  import { Canvas, useFrame, useLoader } from "@react-three/fiber";
  import styled from "styled-components";
  import { MeshStandardMaterial, TextureLoader,vertex  } from "three";

  import EarthDayMap from "../img/earth-large.jpg"
  import EarthNormalMap from "../img/earth-large.jpg"
  import EarthSpecularMap from "../img/earth-large.jpg"
  import EarthCloudMap from "../img/earth-large.jpg"
  
  import * as THREE from "three";
  
  import "./styles.css";
  import {Stars, OrbitControls} from "@react-three/drei";

  
  export default function MyGlobe({x,y,flag}) {

    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(
      TextureLoader,
       [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap])
   
    const earthRef = useRef();
    const userRef = useRef();
    const [ringR, setRingR] = useState(0.05)
    
    //change lat, lon coordinates to degrees
    const [ringL, setRingL]=useState([x?x*Math.PI/180:0, y?(y+90)*Math.PI/180:0, 2.51])

   
     useEffect(()=>{
      console.log("useEffect",ringL)

      
      const interval = setInterval(() => {
       calcRing();
      }, 50);
     
      return () => clearInterval(interval);
    },[])

    useEffect(()=>{
      setRingL([x?x*Math.PI/180:0, y?(y+90)*Math.PI/180:0, 2.51])
      earthRef.current.rotation.y=-ringL[1]
      earthRef.current.rotation.x=ringL[0]
    })
   
   // console.log("x-y:", x, y, ringL)
    
  /*   useFrame(({ringR})=>{
      const a=1
    })
   */

    function calcRing(){
      const myrandom = Math.random()/20
      setRingR(0.05+myrandom)
      
    }

/*     const {rotation} = useSpring ({
     rotation : [x?x*Math.PI/180:0, y?(y+90)*Math.PI/180:0, 2.51] 
    }) */

    return (
      <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[0, 2, 5]} intensity={1.0} />
      <pointLight color="#f6f3ea" position={[0, 2, -5]} intensity={1.0} />
      <Stars
        radius={400}
        depth={60}
        count={30000}
        factor={7}
        saturation={0}
        fade={true}
        autoRotate={true}
      />

      <a.mesh ref={earthRef} position={[0,0,0]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.1}
          roughness={0.7}
          
        />
        { <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          autoRotate={true}
          rotateSpeed={2}
       
          
        /> }
      </a.mesh>
      <mesh ref={userRef} position={[0,0,2.53]}>
        <ringGeometry args={[ringR, ringR+0.03, 30]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
    </>

    )
  }
  