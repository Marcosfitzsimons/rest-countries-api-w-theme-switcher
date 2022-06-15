import React from 'react'
import "../css/CountryCard.css";
import CountryFlag from './CountryFlag';

function CountryCard(props) {
    return (
        <article className="country-card swing-in-top-fwd">
            <CountryFlag />
            <div className="country-card-content">
                <h3 className="country-card__title">Germany</h3>
                <p className="country-card__population country-card__text"><strong className="country-card__strong">Population: </strong>81,770,900</p>
                <p className="country-card__region country-card__text"><strong className="country-card__strong">Region: </strong>Europe</p>
                <p className="country-card__capital country-card__text"><strong className="country-card__strong">Capital: </strong>Berlin</p>
            </div>
        </article>
    )
}

export default CountryCard;