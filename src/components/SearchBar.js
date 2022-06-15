import React from 'react'
import "../css/SearchBar.css";
import { RiSearchLine } from "react-icons/ri";


function SearchBar(props) {
    return (
        <section className="search-box">
            <div className="search-container">
                <span className="search-icon"><RiSearchLine className="search-icon-i" /></span>
                <input type="search" id="search" placeholder="Search for your place..." />
            </div>
        </section>
    )
}

export default SearchBar;