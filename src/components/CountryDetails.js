import React from 'react'
import BackButton from './BackButton';
import CountryDetailsInfo from './CountryDetailsInfo';
import CountryDetailsFlag from './CountryDetailsFlag';

const CountryDetails = ({ backHome, countries }) => {
    return (
        <section className="country-details hidden">
            <BackButton back={backHome} />
            <div className="country-info-container">
                <CountryDetailsFlag />
                <CountryDetailsInfo countries={countries} />
            </div>
        </section>
    )
}

export default CountryDetails