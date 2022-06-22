import React from 'react'
import "../css/CountryCard.css";


function CountryCard({ countries = [] }) {

    return (
        <div className="cards-grid">
            {
                countries.map((country, index) => (
                    <article className="country-card swing-in-top-fwd" key={index}>
                        <div className="country-img-container">
                            <img src={country.flags.png} alt="country frag" className="country-img" />
                        </div>
                        <div className="country-card-content">
                            <h3 className="country-card__title">{ }</h3>
                            <p className="country-card__population country-card__text"><strong className="country-card__strong">Population: </strong>{country.population}</p>
                            <p className="country-card__region country-card__text"><strong className="country-card__strong">Region: </strong>{country.region}</p>
                            <p className="country-card__capital country-card__text"><strong className="country-card__strong">Capital: </strong>{country.capital}</p>
                        </div>

                    </article>
                ))
            }
        </div>
    )
}

export default CountryCard;