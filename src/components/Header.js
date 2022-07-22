import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container container">
                <h1 className="header__title">Where in the world?</h1>
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default Header