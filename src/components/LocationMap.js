import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const LocationMa = (props) => {
    return (
    <div className="leafLetContainer">
            <MapContainer style={{ height: '100%', width: '100%' }}
            center={[ipAddressDict?.location?.lat, ipAddressDict?.location?.lng]}
            zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http:osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
                />
                <Marker 
                    position={[ipAddressDict?.location?.lat, ipAddressDict?.location?.lng]}
                >
                    <Popup>{ipAddressDict?.location}</Popup>
                </Marker>
        </MapContainer>

    </div>
    );
};

export default LocationMap;