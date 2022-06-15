import React from 'react'
import "../css/CountryDetailsInfo.css";


function CountryDetailsInfo() {
    return (
        <div className="country-details-info">
            <div className="fist-part">
                <h3 className="country-details__title">Belgium</h3>
                <p className="country-details__name contry-details__text"><strong className="strong">Native Name: </strong>Belgie</p>
                <p className="country-details__population contry-details__text"><strong className="strong">Population: </strong>11,313,511</p>
                <p className="country-details__region contry-details__text"><strong className="strong">Region: </strong>Europe</p>
                <p className="country-details__sub-region contry-details__text"><strong className="strong">Sub Region: </strong>Western Europe</p>
                <p className="country-details__capital contry-details__text"><strong className="strong">Capital: </strong>Brussels</p>
            </div>
            <div className="second-part">
                <p className="country-details__domain contry-details__text"><strong className="strong">Top Level Domain: </strong>.be</p>
                <p className="country-details__currencies contry-details__text"><strong className="strong">Currencies: </strong>Euro</p>
                <p className="country-details__languages contry-details__text"><strong className="strong">Languages: </strong>Dutch, French, German</p>
            </div>
            <div className="border-countries">
                <h4 className="border-countries__title">Border Countries:</h4>
                <ul className="border-countries-list">
                    <li className="border-countries-list__item contry-details__text">France</li>
                    <li className="border-countries-list__item contry-details__text">Germany</li>
                    <li className="border-countries-list__item contry-details__text">Netherlands</li>
                </ul>
            </div>
        </div>
    )
}

export default CountryDetailsInfo