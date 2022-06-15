import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import SearchBar from './components/SearchBar';
import FilterCountries from './components/FilterCountries';
import CountryCard from './components/CountryCard';
import BackButton from './components/BackButton';
import CountryDetailsInfo from './components/CountryDetailsInfo';
import CountryDetailsFlag from './components/CountryDetailsFlag';
import { RiGithubFill } from 'react-icons/ri';

function App() {
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
          <CountryCard cardTitle="" cardPopulation="" cardRegion="" cardCapital="" />
          <CountryCard cardTitle="" cardPopulation="" cardRegion="" cardCapital="" />
          <CountryCard cardTitle="" cardPopulation="" cardRegion="" cardCapital="" />
          <CountryCard cardTitle="" cardPopulation="" cardRegion="" cardCapital="" />
          <CountryCard cardTitle="" cardPopulation="" cardRegion="" cardCapital="" />
          <CountryCard cardTitle="" cardPopulation="" cardRegion="" cardCapital="" />
        </section>

        <section className="country-details">
          <BackButton />
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
