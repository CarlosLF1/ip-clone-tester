import React, { useState,useEffect} from 'react'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import { Icon } from "leaflet";


export default function LeafletMap({ipAddressDict, country}) {

  //const [sdata, setSdata] = useState(ipAddressDict);
  
  const [coords, setCoords] = useState([ipAddressDict.latitude, ipAddressDict.longitude]);

  console.log('LeafletMap', ipAddressDict, country, coords)

  const iconimg = new Icon({
    iconUrl: country.flags.png,
    iconSize: [40, 40]
  });



 return (
   
        <MapContainer 
            center={coords} 
            zoom={10} 
            scrollWheelZoom={false} 
            className='w-[450px] h-[450px]'
            
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            
        <Marker position={coords} icon= {iconimg} >
            <Popup >
                {ipAddressDict?.region} <br /> {ipAddressDict?.timezone.current_time}
            </Popup>
        </Marker>
   
  </MapContainer>
  
  )      
 
}
