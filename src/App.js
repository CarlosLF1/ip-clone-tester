import IpAddress from "./components/IP/IpAddress";
import Card from "./UI/Card"

function App() {
  return (
    <Card>
      <h1>Your IP address is ...</h1>
      <IpAddress />
    </Card>
  );
}

export default App;
