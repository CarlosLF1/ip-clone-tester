
import classes from "./IpAddress.module.css";
// import LocationMap from "../LocationMap";

export default function IpAddress({ipAddressDict}) {

//   console.log ("ip render:",ipAddressDict)
    return (
       <div>
            <div className={classes.info}>
                <p>
                    <span className={classes.bold}>Public IPv4 Address: </span>
                    {ipAddressDict?.ip}
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

