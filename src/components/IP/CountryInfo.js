import { useEffect, useState } from "react";
import { setGlobalState } from "../State";
import classes from "./IpAddress.module.css";
// import LocationMap from "../LocationMap";

export default function CountryInfo() {
    const [country, setCountry] = useState({})
    const [countryError, setCountryError] = useState(null)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => {
                if (res.ok) {
                setCountryError(null)
                return res.json();
            } else {
                throw Error("Failed to find this country");
            }
            })
            .then((data) => {
                console.log(data);
                setGlobalState('countryInfo', data)
            })
            .catch((error) =>
                setCountryError("Failed to retrieve this country info, please try again later")
            );
    }, [])

    return (
        <div>
            {!countryError && (
                <>
                    <div className={classes.info}>
                        <p>
                            <span className={classes.bold}>Public IPv4 Address: </span>
                            {setCountry?.name.official}
                        </p>
                        <p>
                            <span className={classes.bold}>Internet Service Provider: </span>
                            {country?.isp}
                        </p>
                        <p>
                            <span className={classes.bold}>Location: </span>
                            {country?.location?.city}, {country?.location?.country}
                        </p>
                    </div>
                </>
                
            )}
            
            {countryError && <p>{countryError}</p>}
        </div>
    );
};
