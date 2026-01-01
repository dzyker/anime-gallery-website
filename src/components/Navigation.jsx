import { NavLink } from "react-router-dom";
import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa';
import './Navigation.css';
import logo from "../assets/Logo.png";
import { languageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

function Header() {

    const {getTranslation, setLanguage, language} = useContext(languageContext)

    return (
        <header className='header-nav'>
            <div className="header-set-language">   
                <input id="header-ru-language" onChange={() => setLanguage("ru")} checked={language === "ru"} type="radio" name="select-language"/>
                <label htmlFor="header-ru-language" className="header-set-language-label">RU</label>
                |
                <input id="header-en-language" onChange={() => setLanguage("en")} checked={language === "en"} type="radio" name="select-language"/>
                <label htmlFor="header-en-language" className="header-set-language-label">EN</label>

            </div>
            <NavLink to='/'><img className="header-logo" src={logo} alt="logo" /></NavLink>
            <nav>
                <NavLink to='/' end className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>{getTranslation("home")}</NavLink>
                <NavLink to='/gallery' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>{getTranslation("gallery")}</NavLink>
                <NavLink to='/favorites' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>{getTranslation("favorites")}</NavLink>
                <NavLink to='/settings' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>{getTranslation("settings")}</NavLink>
            </nav>
            <div className="header-social_icons">
                <a href="https://github.com/dzyker"><FaGithub size={40} color="#111" /></a>
                <a href="https://t.me/Shumaxi"><FaTelegram size={40} color="#229ED9" /></a>
                <a href="https://vk.com/maxmacksimovich"><FaVk size={40} color="#425bdb" /></a>
            </div>
        </header>
    )
}

export default Header