
import classes from "./IpAddress.module.css";


export default function CountryInfo({countryInfo}) {

    // console.log("country", countryInfo);
    return (
        <div>
                    <div className={classes.info}>
                        <p>
                            <span className={classes.bold}>Flag: </span>
                            {countryInfo?.flags?.svg}
                        </p>
                        <p>
                            <span className={classes.bold}>Country: </span>
                            {countryInfo?.name?.official}
                        </p>
                        <p>
                            <span className={classes.bold}>Region: </span>
                            {countryInfo?.region}
                        </p>
                        <p>
                            <span className={classes.bold}>Population size: </span>
                            {countryInfo?.population}
                        </p>
                         <p>
                            <span className={classes.bold}>Timezone: </span>
                            {countryInfo?.timezones}
                        </p>
                    </div>
        </div>
    );
};
