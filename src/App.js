import IpAddress from "./components/IP/IpAddress";
// import LocationMap from "./components/LocationMap";
import Card from "./UI/Card"
import CountryInfo from "./components/IP/CountryInfo";
import React from "react";

function App() {
  return (
    <div className='flex flex-wrap rounded-lg'>
      <div className='basis-1/2 min-w-fit'>
        <React.StrictMode>
          <Card className='bg-white'>
            <h2 className='font-bold text-blue-700'>Thanks for using us. Your IP address is ...</h2>
            <br></br>
          <IpAddress />
        </Card>
      <Card className='bg-white'>
            <h2 className='font-bold text-blue-700'>Your Country information is ...</h2>
            <br></br>
          <CountryInfo />
          </Card>
          </React.StrictMode>
      </div>
      <div className='basis-1/2 p-4'>
        <h3 className='bg-white m-auto mt-4 h-full p-1 rounded-lg font-bold text-blue-700'>Where are you?</h3>
      </div>
    </div>
  );
}

export default App;
