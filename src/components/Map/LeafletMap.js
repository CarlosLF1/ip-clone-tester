import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import { Icon } from "leaflet";


export default function LeafletMap({ipAddressDict, country}) {

  console.log('LeafletMap', ipAddressDict, country, )

  const iconimg = new Icon({  
    iconUrl: country.flags.png,
    iconSize: [40, 40]
  });


console.log ("new coordinates:", ipAddressDict.latitude, ipAddressDict.longitude)

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

return (
   
    <MapContainer 
            center={[ipAddressDict.latitude, ipAddressDict.longitude]} 
            zoom={10} 
            scrollWheelZoom={true} 
            className='w-[450px] h-[450px]'>
        <ChangeView center={[ipAddressDict.latitude, ipAddressDict.longitude]} zoom={10} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            
        <Marker position={[ipAddressDict.latitude, ipAddressDict.longitude]} icon= {iconimg} >
            <Popup >
                {ipAddressDict?.region} <br /> {ipAddressDict?.timezone.current_time}
            </Popup>
        </Marker>
   
  </MapContainer>
  
  )      
 
}
