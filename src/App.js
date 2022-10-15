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
import { useParams } from "react-router-dom";

const CanvasContainer = styled.div`width:100%  height:100%`




function App() {

  let { ipSearch } = useParams()

  const [ipAddressDict, setIpAddressDict] = useState()
  const [IPError, setIPError] = useState("Loading")
  const [countryError, setCountryError] = useState("Loading")
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState()
  const [ip, setIp] = useState(ipSearch)
  const [weatherError, setWeatherError] = useState("Finding weather")
 
  let foundCountry

  const [weather, setWeather] = useState()

  useEffect(() => {
    console.log("IP and countries ready:", countries.length, JSON.stringify(ipAddressDict))
    if (countries.length>0 && ipAddressDict) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${ipAddressDict?.latitude}&longitude=${ipAddressDict?.longitude}&current_weather=true`)
        .then((res) => {
          if (res.ok) {
            return res.json();
        } else { setWeatherError("Your weather is so bad we cant find it.")}
        })
        .then((data) => {
          setWeather(data)
          console.log(data);
      })
        foundCountry = countries.find(item => item.cca2 === ipAddressDict.country_code)
        
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

  function findIP (myIp){
    fetch("https://ipwho.is/".concat(myIp))
    .then((res) => {
        if (res.ok) {
        return res.json();
        } else { setIPError("Failed to retrieve IP Address, please try again later")}
      })
    .then((data) => {
        if (data?.latitude) {
        setIpAddressDict(data)
        } else alert ("IP is not searchable") 
      })
    .catch((error) =>
    setIPError("Failed to retrieve IP Address, please try again later")
  );
  }
  
  useEffect(() => {
    findIP('')
    }, [])

  function handleClick(){

    console.log("10.10.10.10 ip searching")
    findIP("8.8.8.8")

  }

  function handleIP(ip){
    console.log("ip searching")
  
    findIP(ip)
  }

  console.log("IP Info:", ipAddressDict)
  return (
  
    <div className='card bg-black flex flex-row flex-wrap rounded-lg'>
       <div className="bg-wrapper fixed inset-0" id="bg-globe">
               <CanvasContainer>
                    <Canvas>
                        <Suspense fallback={null}>
                            <MyGlobe x={ipAddressDict?.latitude} y={ipAddressDict?.longitude} flag={country?.flags?.png}/>    
                        </Suspense>
                    </Canvas>


              </CanvasContainer>
      </div>
      
      <div className='flex flex-row' id='ipApp-container'>
        <div className='basis-1/2 overlay-content flex flex-col'>
         <React.StrictMode>
          <Card className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
            <h2 className='font-bold text-blue-300'>Thanks for using us. Your IP address is ...</h2>

            <br></br>
            <IpAddress ipAddressDict={ipAddressDict} cb={handleIP} />
          </Card>
        
          <Card className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
            <h2 className='font-bold text-blue-300'>Your Country information is ...</h2>
            <br></br>
            <CountryInfo countryInfo={country} weather={weather} />
          </Card>
          </React.StrictMode>
        </div>
            
        {/* <div className='basis-1/4'>

        </div> */}
        <div className='basis-1/2 rounded'>
          <Card className='bg-white rounded'>
            <Map country={country} ipAddressDict ={ipAddressDict}/>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
