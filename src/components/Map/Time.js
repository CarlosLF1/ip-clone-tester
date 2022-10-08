import React from 'react';


export default function Time(props) {
  
  return (
    <p>Your current time is:{props.ipAddressDict?.location?.timezone}</p>
  )
}