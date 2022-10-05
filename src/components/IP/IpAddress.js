import { useEffect, useState } from "react";
import { setGlobalState } from "../State";
import classes from "./IpAddress.module.css";
// import LocationMap from "../LocationMap";

export default function IpAddress() {
    const [ipAddressDict, setIpAddressDict] = useState({})
    const [httpError, setHttpError] = useState(null)

    useEffect(() => {
        fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_NKD1wQqlIyem5WXhpNc88I0RFs7MT&ipAddress=")
            .then((res) => {
                if (res.ok) {
                setHttpError(null)
                return res.json();
            } else {
                throw Error("Failed to fetch IP Address");
            }
            })
            .then((data) => {
                console.log(data);
                setIpAddressDict(data)
                setGlobalState('ipAddress', data)
            })
            .catch((error) =>
                setHttpError("Failed to retrieve IP Address, please try again later")
            );
    }, [])

    return (
       <div>
            {!httpError && (
                // <>
                    <div className={classes.info}>
                        <p>
                            <span className={classes.bold}>Public IPv4 Address: </span>
                            {ipAddressDict?.ip}
                        </p>
                        <p>
                            <span className={classes.bold}>Internet Service Provider: </span>
                            {ipAddressDict?.isp}
                        </p>
                        <p>
                            <span className={classes.bold}>Location: </span>
                            {ipAddressDict?.location?.city}, {ipAddressDict?.location?.country}
                        </p>
                    </div>
                // </>
                
            )}
            
            {httpError && <p>{httpError}</p>}
        </div>
        )}

