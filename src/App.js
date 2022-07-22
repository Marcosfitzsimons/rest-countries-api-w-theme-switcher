import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterCountries from './components/FilterCountries';
import CountryCard from './components/CountryCard';
import CountryDetails from './components/CountryDetails';
import { RiGithubFill } from 'react-icons/ri';
import { useState, useEffect } from 'react';


function App() {

  const [countries, setCountries] = useState([]);
  const [searchFiltered, setSearchFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch API

  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    const fetchApi = async () => {
      displayLoading();
      const response = await fetch(url);
      const countries = await response.json();
      hideLoading()
      setCountries(countries);
    }
    fetchApi();
  }, []);

  // backHome btn

  const backHome = () => {

    const cards = document.querySelector(".cards-grid");
    cards.classList.remove("hidden");

    const details = document.querySelector(".country-details");
    details.classList.add("hidden");

    const filter = document.querySelector(".filter-container");
    filter.classList.remove("hidden");
  }

  // Display loading animation

  const displayLoading = () => {
    const loader = document.querySelector("#loading");
    loader.classList.add("display");
    setTimeout(() => {
      loader.classList.remove("display");
    }, 5000)
  }

  const hideLoading = () => {
    const loader = document.querySelector("#loading");
    loader.classList.remove("display");
  }

  // Search Countries

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country) => (
        Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase())
      ))
      setSearchFiltered(filteredCountries);
    } else {
      setSearchFiltered(countries);
    }
  }

  return (
    <div className="App">

      <Header />

      <main className="main container">

        <header className="main-header">
          <SearchBar searchCountries={searchCountries} searchInput={searchInput} />
          <FilterCountries />
        </header>

        <section className="cards-container">
          <div id="loading"></div>
          <div className="cards-grid">
            <CountryCard countries={countries} searchFiltered={searchFiltered} searchInput={searchInput} />
          </div>
        </section>

        <CountryDetails backHome={backHome} countries={countries} />

      </main>

      <footer className="footer container">
        <p className="me">By Marcos Fitzsimons <a href="https://github.com/Marcosfitzsimons" target="_blank" rel="noreferrer"><RiGithubFill className="github-icon" /></a></p>
      </footer>

    </div>
  );
}

export default App;
