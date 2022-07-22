import React from 'react'
import "../css/CountryDetailsInfo.css";
import BorderCountry from './BorderCountry';
// import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom"

function CountryDetailsInfo() {

    /*
    const [country, setCountry] = useState();
    const { capital } = useParams();


    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${capital}`); // why acces_key ... ?
            const data = await response.json();
            setCountry(data);
        }

        fetchCountryData()
    }, [capital]);
*/

    return (

        <div className="country-details-info" >
            <div className="fist-part">
                <h3 className="country-details__title">Title Country</h3>
                <p className="country-details__name contry-details__text"><strong className="strong">Native Name: </strong>Native Name</p>
                <p className="country-details__population contry-details__text"><strong className="strong">Population: </strong>population</p>
                <p className="country-details__region contry-details__text"><strong className="strong">Region: </strong>region</p>
                <p className="country-details__sub-region contry-details__text"><strong className="strong">Sub Region: </strong>subregion</p>
                <p className="country-details__capital contry-details__text"><strong className="strong">Capital: </strong>capital</p>
            </div>
            <div className="second-part">
                <p className="country-details__domain contry-details__text"><strong className="strong">Top Level Domain: </strong>lvl domain</p>
                <p className="country-details__currencies contry-details__text"><strong className="strong">Currencies: </strong>currencies</p>
                <p className="country-details__languages contry-details__text"><strong className="strong">Languages: </strong>languages</p>
            </div>
            <div className="border-countries">
                <h4 className="border-countries__title">Border Countries:</h4>
                <ul className="border-countries-list">
                    <BorderCountry />
                </ul>
            </div>
        </div>


    )
}

export default CountryDetailsInfo