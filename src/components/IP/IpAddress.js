
import { setOptions } from "leaflet";
import { useState } from "react";
import classes from "./IpAddress.module.css";
// import LocationMap from "../LocationMap";

export default function IpAddress({ipAddressDict, cb}) {

    const [ip, setIp] = useState(ipAddressDict?.ip);
 
    function handleClick(){
        console.log("new search ip:",ip)
        cb(ip)
    }

//   console.log ("ip render:",ipAddressDict)
    return (
       <div>
            <div className={classes.info}>
                <p>
                    <span className={classes.bold}>Public IPv4 Address: </span>
                    <div flex flex-row>
                        <input 
                            type="text" 
                            defaultValue={ipAddressDict?.ip} 
                            onChange={(e)=>{setIp(e.target.value)}}
                            STYLE={"background-color:transparent"} />
                        <button onClick={handleClick}>Search</button>
                    </div>
                </p>
                <p>
                    <span className={classes.bold}>Internet Service Provider: </span>
                    {ipAddressDict?.connection.isp}
                </p>
                <p>
                    <span className={classes.bold}>Location: </span>
                    {ipAddressDict?.region}, {ipAddressDict?.country}
                </p>
            </div>
        </div>
    )}

