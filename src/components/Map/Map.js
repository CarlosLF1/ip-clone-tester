import Time from "./Time"
import LeafletMap from "./LeafletMap"
import MyGlobe from "./Globe"
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { useState, useEffect,Suspense } from "react";

const CanvasContainer = styled.div`width:100%  height:100%`

export default function Map({country, ipAddressDict }) {

    console.log ("Map Info", country, ipAddressDict)
    const [zoom, setZoom] = useState(0);
    

    console.log (zoom)
    return (

        country && ipAddressDict
        ?<div className="bg-black flex flex-col" >
            <div>
                <Time ipAddressDict={ipAddressDict}/>
            </div>
            <div>
                {
                <LeafletMap ipAddressDict={ipAddressDict} country={country} />
                }
            </div>
            <div className="h-100%">
               <CanvasContainer>
                    <Canvas>
                        <Suspense fallback={null}>
                            <MyGlobe x={30} y={30} />    
                        </Suspense>
                    </Canvas>

                 </CanvasContainer>
            </div>
        </div>
        : <p>Loading...</p>
    )

}