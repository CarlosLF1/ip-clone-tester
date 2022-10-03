import {createGlobalState} from "react-hooks-global-state"

const {setGlobalState, useGlobalState} = createGlobalState({
ipAddress:{},
countryInfo:{},
})

export {setGlobalState, useGlobalState}