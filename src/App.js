import IpAddress from "./components/IP/IpAddress";
import Header from "./components/header/Header";
// import LocationMap from "./components/LocationMap";
import Card from "./UI/Card"
import CountryInfo from "./components/IP/CountryInfo";

function App() {
  return (
    <div className='flex flex-wrap'>
      <div className='basis-1/2 min-w-fit'>
        <Card className='bg-white'>
        <h2>Your IP address is ...</h2>
          <IpAddress />
        </Card>
      <Card className='bg-white'>
          <h2>Your Country information is ...</h2>
          <CountryInfo />
      </Card>
      </div>
      <div className='basis-1/2 p-4'>
        <h3 className='bg-white m-auto mt-4 h-full p-1 rounded'>Our map</h3>
      </div>
    </div>
  );
}

export default App;
