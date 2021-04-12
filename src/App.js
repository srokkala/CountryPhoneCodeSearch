import React  from "react";
import {CountrySearcher} from "countryinfosearch-react-steven";


export default function App (){
    const [number, setNumber] = React.useState();
    // Testing State Change
    const getNumber = (data) => {
        setNumber(data);
    };

    return (
        <CountrySearcher getPhoneNumber = {getNumber} />
    )
}
