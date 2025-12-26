import { NavLink } from "react-router-dom"
import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa'
import './Navigation.css'

function Header() {
    return (
        <header className='header-nav'>
            <NavLink to='/'><img className="header-logo" src="src\assets\Logo.png" alt="logo" /></NavLink>
            <nav>
                <NavLink to='/' end className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>Главная</NavLink>
                <NavLink to='/gallery' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>Галерея</NavLink>
                <NavLink to='/favorites' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>Избранное</NavLink>
                <NavLink to='/settings' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>Настройки</NavLink>
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