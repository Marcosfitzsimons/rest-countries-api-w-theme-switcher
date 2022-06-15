import React from 'react'
import "../css/FilterCountries.css";
import { RiArrowDropDownLine } from "react-icons/ri";


function FilterCountries(props) {
    return (
        <div className="filter-container">
            <select name="regions" id="cars" defaultValue="Filter by Region" className="regions">
                <option disabled="disabled" value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <RiArrowDropDownLine className="arrow-icon" />
        </div>
    )
}

export default FilterCountries