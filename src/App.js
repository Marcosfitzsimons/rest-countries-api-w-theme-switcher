import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import SearchBar from './components/SearchBar';
import FilterCountries from './components/FilterCountries';
import CountryCard from './components/CountryCard';
import BackButton from './components/BackButton';
import CountryDetailsInfo from './components/CountryDetailsInfo';
import CountryDetailsFlag from './components/CountryDetailsFlag';
import { RiGithubFill } from 'react-icons/ri';
import { useState, useEffect } from 'react';


function App() {

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

  // Fetch API

  const url = 'https://restcountries.com/v3.1/all';
  const [countries, setCountries] = useState([]);

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


  return (
    <div className="App">

      <header className="header">
        <div className="header-container container">
          <h1 className="header__title">Where in the world?</h1>
          <ThemeSwitcher />
        </div>
      </header>

      <main className="main container">

        <header className="main-header">
          <SearchBar />
          <FilterCountries />
        </header>
        <section className="cards-container">
          <div id="loading"></div>
          <CountryCard countries={countries} />
        </section>

        <section className="country-details">
          <BackButton back={backHome} />
          <div className="country-info-container">
            <CountryDetailsFlag />
            <CountryDetailsInfo />
          </div>
        </section>

      </main>

      <footer className="footer container">
        <p className="me">By Marcos Fitzsimons <a href="https://github.com/Marcosfitzsimons" target="_blank" rel="noreferrer"><RiGithubFill className="github-icon" /></a></p>
      </footer>

    </div>
  );
}

export default App;
