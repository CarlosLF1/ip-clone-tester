import { useEffect, useState } from "react";

import classes from "./IpAddress.module.css";

const IpAddress = () => {
    const [ipAddressDict, setIpAddressDict] = useState({})
    const [httpError, setHttpError] = useState(null)

    useEffect(() => {
        fetch("https://geo.ipify.org/api/v2/country?apiKey=at_NKD1wQqlIyem5WXhpNc88I0RFs7MT&ipAddress=")
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
            })
            .catch((error) =>
                setHttpError("Failed to retrieve IP Address, please try again later")
            );
    }, [])

    return (
        <div>
            {!httpError && (
                <>
                    <div className={classes.info}>
                        <p>
                            <span className={classes.bold}></span>
                        </p>
                    </div>
                </>
            )}
            <h1>{ipAddressDict.ip}</h1>
            {httpError && <p>{httpError}</p>}
        </div>
    );
};

export default IpAddress;