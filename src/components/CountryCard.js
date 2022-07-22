import React from 'react'
import "../css/CountryCard.css";


function CountryCard({ countries = [], searchFiltered, searchInput }) {

    // Show Details

    const showDetails = () => {
        const details = document.querySelector(".country-details");
        details.classList.remove("hidden");
        details.classList.add("flex");

        const cards = document.querySelector(".cards-grid");
        cards.classList.add("hidden");

        const filter = document.querySelector(".filter-container");
        filter.classList.add("hidden");


    }

    return (
        <>
            {

                searchInput.length > 0 ? searchFiltered.map((country, index) => (
                    <article className="country-card swing-in-top-fwd" key={index} onClick={showDetails}>
                        <div className="country-img-container">
                            <img src={country.flags.png} alt="country frag" className="country-img" />
                        </div>
                        <div className="country-card-content">
                            <h3 className="country-card__title">{country.name.common}</h3>
                            <p className="country-card__population country-card__text"><strong className="country-card__strong">Population: </strong>{country.population}</p>
                            <p className="country-card__region country-card__text"><strong className="country-card__strong">Region: </strong>{country.region}</p>
                            <p className="country-card__capital country-card__text"><strong className="country-card__strong">Capital: </strong>{country.capital}</p>
                        </div>

                    </article>
                )) : countries.map((country, index) => (
                    <article className="country-card swing-in-top-fwd" key={index} onClick={showDetails}>
                        <div className="country-img-container">
                            <img src={country.flags.png} alt="country frag" className="country-img" />
                        </div>
                        <div className="country-card-content">
                            <h3 className="country-card__title">{country.name.common}</h3>
                            <p className="country-card__population country-card__text"><strong className="country-card__strong">Population: </strong>{country.population}</p>
                            <p className="country-card__region country-card__text"><strong className="country-card__strong">Region: </strong>{country.region}</p>
                            <p className="country-card__capital country-card__text"><strong className="country-card__strong">Capital: </strong>{country.capital}</p>
                        </div>

                    </article>
                ))
            }
        </>
    )
}

export default CountryCard;