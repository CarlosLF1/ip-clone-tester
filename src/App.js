import IpAddress from "./components/IP/IpAddress";
// import LocationMap from "./components/LocationMap";
import Card from "./UI/Card"
import CountryInfo from "./components/IP/CountryInfo";
import React, { useState, useEffect, Suspense } from "react";
import styles from './App.css';
import MyGlobe from "./components/Map/Globe";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Map from "./components/Map/Map"

const CanvasContainer = styled.div`width:100%  height:100%`



function App() {

  const [ipAddressDict, setIpAddressDict] = useState()
  const [IPError, setIPError] = useState("Loading")
  const [countryError, setCountryError] = useState("Loading")
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState()
 
  let foundCountry


  useEffect(() => {
    console.log ("IP and countries ready:", countries.length, JSON.stringify(ipAddressDict))
    if (countries.length>0 && ipAddressDict) {
       
        foundCountry = countries.find(item => item.cca2 === ipAddressDict.location.country)
        
        setCountry(foundCountry)
    }
   
  }, [countries, ipAddressDict ])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
            if (res.ok) {
            return res.json();
             } else { setCountryError("Failed to retrieve this country info, please try again later")}
            })
        .then((data) => {
            // console.log("countries:",data);
            setCountries(data)   
        })
        .catch((error) =>
            setCountryError("Failed to retrieve this country info, please try again later")
        );
    }, [])

  useEffect(() => {
    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_7PXxkzTdM5XYM8e7GXtTRlynd5Lhk&ipAddress=")
        .then((res) => {
            if (res.ok) {
            return res.json();
            } else { setIPError("Failed to retrieve IP Address, please try again later")}
          })
        .then((data) => {
            // console.log(data);
            setIpAddressDict(data)   
          })
        .catch((error) =>
        setIPError("Failed to retrieve IP Address, please try again later")
      );
    }, [])


  return (
    <div className='card flex flex-row flex-wrap rounded-lg'>
       <div className="bg-wrapper fixed inset-0" id="bg-globe">
               <CanvasContainer>
                    <Canvas>
                        <Suspense fallback={null}>
                            <MyGlobe x={30} y={30} />    
                        </Suspense>
                    </Canvas>

                 </CanvasContainer>
            </div>
{      <div className='overlay-content flex-row min-w-fit'>
        <React.StrictMode>
          <Card className='bg-white'>
            <h2 className='font-bold text-blue-700'>Thanks for using us. Your IP address is ...</h2>
            <br></br>
            <IpAddress ipAddressDict={ipAddressDict}/>
          </Card>
        
          <Card className='bg-white'>
            <h2 className='font-bold text-blue-700'>Your Country information is ...</h2>
            <br></br>
            <CountryInfo countryInfo={country}/>
          </Card>
          </React.StrictMode>
      </div>}
      <div className='min-w-fit'>
          <Card className='bg-white'>
            <Map country={country} ipAddressDict ={ipAddressDict}/>
          </Card>
      </div>
      
    </div>
  );
}

export default App;
