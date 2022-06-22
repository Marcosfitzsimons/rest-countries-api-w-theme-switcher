import React from "react";
import "../css/ThemeSwitcher.css";
import { RiSunLine } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";

export function themeSwitcher(props) {



    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        const iconMoon = document.querySelector('.moon-icon');
        const iconSun = document.querySelector('.sun-icon');
        iconMoon.classList.toggle('active');
        iconSun.classList.remove('active');
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        const iconMoon = document.querySelector('.moon-icon');
        const iconSun = document.querySelector('.sun-icon');
        iconSun.classList.toggle('active');
        iconMoon.classList.remove('active');
    };

    const storedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);

    if (defaultDark) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }

    return (
        <section className="theme-switcher-container">
            <div className="icon-container">
                <RiSunLine onClick={setLight} className={`sun-icon ${storedTheme !== 'dark' ? "active" : ""
                    }`} />
            </div>
            <div className="icon-container">
                <RiMoonLine onClick={setDark} className={`moon-icon ${storedTheme === 'dark' ? "active" : ""
                    }`} />
            </div>
        </section>
    );
}

export default themeSwitcher;
