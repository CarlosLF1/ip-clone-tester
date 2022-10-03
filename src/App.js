import IpAddress from "./components/IP/IpAddress";
// import LocationMap from "./components/LocationMap";
import Card from "./UI/Card"

function App() {
  return (
    <div>
     <Card>
      <h1>Your IP address is ...</h1>
      <IpAddress />
     </Card>
      {/* <LocationMap /> */}
    </div>
  );
}

export default App;
