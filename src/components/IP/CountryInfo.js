import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../State";
import classes from "./IpAddress.module.css";
// import LocationMap from "../LocationMap";

export default function CountryInfo() {
    const [country, setCountry] = useState([])
    const [countryError, setCountryError] = useState(null)
    const countryIp = useGlobalState('ipAddress')
    const countryInfo = useGlobalState('countryInfo')
    console.log(countryIp);

    let foundCountry = {}

    useEffect(() => {
        if (country.length > 0) {
            foundCountry = country.find(item => item.cca2 === countryIp[0].location.country)
            console.log(foundCountry);
        setGlobalState('countryInfo', foundCountry)
        }
       
    }, [country])

    useEffect(() => {
       
        fetch("https://restcountries.com/v3.1/region/europe")
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
            setCountry(data)   
                // setGlobalState('countryInfo', data.find((item) => item.altSpellings[0] === countryIp.location.country))
                console.log(countryIp);
                
                // setGlobalState(foundCountry, )
            console.log('This is the country:', foundCountry);
            })
            .catch((error) =>
                setCountryError("Failed to retrieve this country info, please try again later")
        );
    }, [])

    console.log(countryInfo);
    return (
        <div>
            {!countryError && (
                <>
                    <div className={classes.info}>
                        <p>
                            <span className={classes.bold}>Flag: </span>
                            {countryInfo[0]?.flags?.svg}
                        </p>
                        <p>
                            <span className={classes.bold}>Country: </span>
                            {countryInfo[0]?.name?.official}
                        </p>
                        <p>
                            <span className={classes.bold}>Region: </span>
                            {countryInfo[0]?.region}
                        </p>
                        <p>
                            <span className={classes.bold}>Population size: </span>
                            {countryInfo[0]?.population}
                        </p>
                         <p>
                            <span className={classes.bold}>Timezone: </span>
                            {countryInfo[0]?.timezones}
                        </p>
                    </div>
                </>
                
            )}
            
            {countryError && <p>{countryError}</p>}
        </div>
    );
};
