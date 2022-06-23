import React from 'react'
import "../css/SearchBar.css";
import { RiSearchLine } from "react-icons/ri";


function SearchBar({ searchCountries, searchInput }) {
    return (
        <section className="search-box">
            <div className="search-container">
                <span className="search-icon"><RiSearchLine className="search-icon-i" /></span>
                <input type="search" id="search" tabIndex="1" placeholder="Search for your place..." value={searchInput} onChange={(e) => searchCountries(e.target.value)} />
            </div>
        </section>
    )
}

export default SearchBar;