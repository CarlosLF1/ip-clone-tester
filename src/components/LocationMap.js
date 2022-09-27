
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const LocationMap = (props) => {
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